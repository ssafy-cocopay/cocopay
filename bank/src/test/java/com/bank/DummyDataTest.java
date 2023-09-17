package com.bank;

import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.bank.entity.Bank;
import com.bank.bank.entity.QBank;
import com.bank.bank.repository.BankRepository;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.card.entity.Card;
import com.bank.card.repository.card.CardRepository;
import com.bank.user.entity.User;
import com.bank.user.repository.UserRepository;
import com.bank.user.service.UserService;
import com.github.javafaker.Faker;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import static com.bank.bank.entity.QBank.*;


@SpringBootTest
public class DummyDataTest {

    Faker faker = new Faker(new Locale("ko"));

    //휴대폰 번호 정규식
    String pattern = "^01[0-9]-\\d{4}-\\d{4}$";

    JPAQueryFactory jpaQueryFactory;

    @Autowired
    EntityManager entityManager;

    @Autowired
    UserService userService;

    @Autowired
    BankRepository bankRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    CardRepository cardRepository;

    @Autowired
    BenefitRepository benefitRepository;

    enum CardList{
        Deep_Dream_체크("신한","Deep Dream 체크카드","체크"),
        Nori2_체크("국민","노리2 체크카드","체크");

        final String bankName;
        final String cardName;
        final String type;

        CardList(String bankName, String cardName, String type) {
            this.bankName = bankName;
            this.cardName = cardName;
            this.type = type;
        }
    }

    @BeforeEach
    public void init() {
        jpaQueryFactory = new JPAQueryFactory(entityManager);
    }

    @Test
    public void userDummy() {

        for (int i = 0; i < 10; i++) {
            User user = new User();

            String name = faker.name().fullName().replace(" ", "");
            String email = faker.bothify("???####@gmail.com");
            String tel = faker.bothify("010-####-####");
            String password = faker.internet().password(4, 13);

            user.setName(name);
            user.setTel(tel);
            user.setPassword(password);
            user.setEmail(email);

            userService.registUser(user);
        }
    }

    @Test
    public void bankDummy() {

        List<String> nameList = new ArrayList<>();
        //여기에 넣고 싶은 금융권 이름
        nameList.add("농협");
        nameList.add("우리");
        nameList.add("신한");
        nameList.add("국민");
        nameList.add("카카오뱅크");

        List<Bank> bankList = nameList.stream()
                .map(name -> {
                    Bank bank = new Bank();
                    bank.setBankName(name);

                    return bank;
                }).toList();

        bankRepository.saveAll(bankList);
    }

    @Test
    public void accountDummy() {
        List<User> userList = userRepository.findAll();

        List<Bank> bankList = bankRepository.findAll();

        List<Account> accountList = new ArrayList<>();

        for (User user : userList) {
            for (Bank bank : bankList) {
                Account account = Account.builder()
                        .user(user)
                        .bank(bank)
                        .num(faker.bothify("#######-##-######"))
                        .registedDate(LocalDateTime.now())
                        .balance(faker.number().numberBetween(0, 100000000))
                        .build();

                accountList.add(account);
            }
        }
        accountRepository.saveAll(accountList);
    }

    //상단 enum에 있는 카드들 전부 db 저장
    @Test
    public void cardDummy() {
        CardList[] enumList = CardList.values();

        List<Card> newCardList = Arrays.stream(enumList)
                .map(enumCard -> {
                    Bank findBank = findBankByBankName(enumCard.bankName);

                    Card card = new Card();
                    card.setBank(findBank);
                    card.setCardName(enumCard.cardName);
                    card.setType(enumCard.type);
                    card.setPerformance(1); //뭔지 몰라서 일단 1

                    return card;
                }).toList();

        cardRepository.saveAll(newCardList);

    }

    public Bank findBankByBankName(String bankName) {
        return jpaQueryFactory
                .selectFrom(bank)
                .where(bank.bankName.eq(bankName))
                .fetchOne();
    }

    //혜택은 다 달라서 별 수 없이 수작업 진행해야할 듯
    @Test
    public void benefitDummy() {
        //변수들로 수정
        int cardId = 3;

        Card card = cardRepository.findById(cardId).get();

        Benefit benefit = new Benefit();

        benefit.setCard(card);
        benefit.setCategory("스타벅스");
        benefit.setStoreName("카페/디저트");
        benefit.setDiscount(10);
        benefit.setLimit(3000);
        benefit.setType(true);

        benefitRepository.save(benefit);
    }
}
