package com.bank;

import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.bank.entity.Bank;
import com.bank.bank.repository.BankRepository;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.card.entity.Card;
import com.bank.card.repository.card.CardRepository;
import com.bank.enumlist.BenefitList;
import com.bank.enumlist.CardList;
import com.bank.enumlist.PerformanceList;
import com.bank.performance.entity.Performance;
import com.bank.performance.repository.PerformanceRepository;
import com.bank.user.entity.User;
import com.bank.user.repository.UserRepository;
import com.github.javafaker.Faker;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import static com.bank.bank.entity.QBank.bank;
import static com.bank.card.entity.QCard.card;

@SpringBootTest
public class DockerDbDummyTest {
    Faker faker = new Faker(new Locale("ko"));
    JPAQueryFactory jpaQueryFactory;

    CardList enumCardList;

    PerformanceList enumPerformanceList;

    @Autowired
    EntityManager entityManager;

    @Autowired
    BankRepository bankRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    CardRepository cardRepository;

    @Autowired
    PerformanceRepository performanceRepository;

    @Autowired
    BenefitRepository benefitRepository;

    @BeforeEach
    public void init() {
        jpaQueryFactory = new JPAQueryFactory(entityManager);
    }

    @Test
    public void userDummy() {
        User user = User.builder()
                .name("한성현")
                .tel("010-5136-5349")
                .build();

        userRepository.save(user);
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
        nameList.add("토스");
        nameList.add("하나");
        nameList.add("케이뱅크");
        nameList.add("삼성");
        nameList.add("현대");
        nameList.add("롯데");
        nameList.add("기업");

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
        List<User> findUserList = userRepository.findAll();

        List<Bank> findBankList = bankRepository.findAll();

        List<Account> accountList = new ArrayList<>();
        for (User user : findUserList) {
            for (Bank bank : findBankList) {
                Account account = Account.builder()
                        .num(faker.numerify("###-###-######"))
                        .balance(1000000)
                        .user(user)
                        .bank(bank)
                        .build();
                accountList.add(account);
            }
        }
        accountRepository.saveAll(accountList);
    }

    @Test
    public void cardDummy() {
        CardList[] enumList = CardList.values();

        List<Card> newCardList = Arrays.stream(enumList)
                .map(enumCard -> {
                    Bank findBank = findBankByBankName(enumCard.getBankName());

                    Card card = new Card();
                    card.setBank(findBank);
                    card.setCardName(enumCard.getCardName());
                    card.setType(enumCard.getType());
                    card.setCardDefaultImage("url");
                    card.setVisa(true);
                    card.setMaster(true);

                    return card;
                }).toList();

        cardRepository.saveAll(newCardList);

    }

    @Test
    public void performanceDummy() {
        PerformanceList[] values = PerformanceList.values();
        System.out.println("리스트 : " + Arrays.toString(values));
        List<Performance> list = Arrays.stream(values)
                .map(v -> {
                    Card cardByName = findCardByName(v.getCardName());
                    return Performance.builder()
                            .level(v.getLevel())
                            .levelPrice(v.getLevelPrice())
                            .card(cardByName)
                            .build();
                })
                .toList();

        performanceRepository.saveAll(list);
    }

    @Test
    public void benefitDummy() {
        BenefitList[] values = BenefitList.values();
        List<Benefit> list = Arrays.stream(values)
                .map(b -> {
                    Card cardByName = findCardByName(b.getCardName());
                    return Benefit.builder()
                            .card(cardByName)
                            .category(b.getCategory())
                            .storeName(b.getStoreName())
                            .limit(b.getBenefitLimit())
                            .discountType(b.getDiscountType())
                            .discount(b.getDiscount())
                            .build();
                })
                .toList();

        benefitRepository.saveAll(list);
    }



    public Bank findBankByBankName(String bankName) {
        return jpaQueryFactory
                .selectFrom(bank)
                .where(bank.bankName.eq(bankName))
                .fetchOne();
    }

    public Card findCardByName(String cardName) {
        return jpaQueryFactory
                .select(card)
                .from(card)
                .where(card.cardName.eq(cardName))
                .fetchOne();
    }
}
