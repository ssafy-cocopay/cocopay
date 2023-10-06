package com.bank;

import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.bank.entity.Bank;
import com.bank.bank.repository.BankRepository;
import com.bank.benefit.entity.Benefit;
import com.bank.benefit.entity.UserCardBenefit;
import com.bank.benefit.repository.BenefitRepository;
import com.bank.benefit.repository.UserCardBenefitRepository;
import com.bank.card.entity.Card;
import com.bank.card.entity.CardType;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.card.CardRepository;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.card_history.entity.Category;
import com.bank.enumlist.CardList;
import com.bank.performance.entity.Performance;
import com.bank.performance.repository.PerformanceRepository;
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

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import static com.bank.bank.entity.QBank.bank;
import static com.bank.benefit.entity.QBenefit.benefit;
import static com.bank.card.entity.QCard.card;


@SpringBootTest
public class DummyDataTest {

    Faker faker = new Faker(new Locale("ko"));


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

    @Autowired
    UserCardRepository userCardRepository;

    @Autowired
    UserCardBenefitRepository userCardBenefitRepository;

    @Autowired
    PerformanceRepository performanceRepository;

    enum CardList {
        Deep_Dream_체크("신한", "Deep Dream 체크카드", CardType.체크카드),
        Nori2_체크("국민", "노리2 체크카드", CardType.체크카드);

        final String bankName;
        final String cardName;

        final CardType type;

        CardList(String bankName, String cardName, CardType type) {
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
            String tel = faker.bothify("010-####-####");

            user.setName(name);
            user.setTel(tel);

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
                    card.setCardDefaultImage("url");
                    card.setVisa(true);
                    card.setMaster(true);

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
        int cardId = 1;

        Card card = cardRepository.findById(cardId).get();

        Benefit benefit = new Benefit();

        benefit.setCard(card);
        benefit.setCategory(Category.영화);
        benefit.setStoreName("CGV");
        benefit.setDiscount(20);
        benefit.setLimit(3000);

        benefitRepository.save(benefit);
    }

    @Test
    public void performanceDummy() {
        int cardId = 2;
        Card findCard = cardRepository.findById(cardId).get();
        List<Performance> performanceList = new ArrayList<>();

        for (int i = 4; i <= 1000; i++) {
            Performance performance = Performance.builder()
                    .card(findCard)
                    .level(i)
                    .levelPrice(i * 100000)
                    .build();

            performanceList.add(performance);
        }
        performanceRepository.saveAll(performanceList);
    }

    //사용자 카드 더미
    //사용자 카드 더미가 생성되는 순간 사용자별 혜택도 같이 생성이 되어야 함
    @Test
    public void userCardAndUserBenefitDummy() {
        //유저가 가지고 있는 해당 은행의 계좌와 카드를 랜덤으로 가지고 옴
        //데이터가 꼬임을 방지하기 위함
        int uuid = 4;
        String bankName = "신한";

        Bank findBank = findBankByBankName(bankName);

        List<Account> accountList = findAccountList(uuid, findBank.getId());

        List<Card> cardList = findCardList(findBank);

        int accountIdx = faker.number().numberBetween(0, accountList.size() - 1);
        int cardIdx = faker.number().numberBetween(0, cardList.size() - 1);
        Card card = cardList.get(cardIdx);

        UserCard userCard = getUserCard(accountList, accountIdx, card);

        //사용자 카드 저장
        UserCard saved = userCardRepository.save(userCard);

        List<Benefit> benefitList = findBenefitList(card);

        List<UserCardBenefit> userCardBenefitList = benefitList.stream()
                .map(benefit -> {
                    UserCardBenefit userCardBenefit = new UserCardBenefit();
                    userCardBenefit.setUserCard(saved);
                    userCardBenefit.setBenefit(benefit);
                    userCardBenefit.setDiscountAmount(benefit.getLimit());
                    return userCardBenefit;
                }).toList();

        userCardBenefitRepository.saveAll(userCardBenefitList);
    }

    private UserCard getUserCard(List<Account> accountList, int accountIdx, Card card) {
        UserCard userCard = new UserCard();
        userCard.setCard(card);
        userCard.setPassword(faker.numerify("####"));
        userCard.setValidDate("12/25");
        userCard.setCvc(faker.numerify("###"));
        userCard.setAccount(accountList.get(accountIdx));
        userCard.setSerialNumber(faker.numerify("####-####-####-####"));
        userCard.setIsPerformanced(true);
        userCard.setTotalPrice(297607);

        return userCard;
    }

    public List<Benefit> findBenefitList(Card card) {
        return jpaQueryFactory
                .selectFrom(benefit)
                .where(benefit.card.id.eq(card.getId()))
                .fetch();
    }

    public List<Account> findAccountList(int uuid, int bankId) {
        return accountRepository.findAccount(null, uuid, bankId, null);
    }

    public List<Card> findCardList(Bank bank) {
        return jpaQueryFactory
                .selectFrom(card)
                .where(card.bank.eq(bank))
                .fetch();
    }

}
