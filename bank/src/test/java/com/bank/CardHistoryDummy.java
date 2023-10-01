package com.bank;

import com.bank.card.dto.PaymentRequestDto;
import com.bank.card.service.PaymentService;
import com.bank.card_history.entity.CardHistory;
import com.bank.card_history.entity.TransactionType;
import com.bank.card_history.repository.CardHistoryRepository;
import com.bank.enumlist.BenefitList;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Locale;

@SpringBootTest
public class CardHistoryDummy {

    @Autowired
    PaymentService paymentService;

    @Autowired
    CardHistoryRepository cardHistoryRepository;

    @Test
    public void test() {
        Faker faker = new Faker(new Locale("ko"));
        for (int i = 0; i < 100; i++) {
            String bothify = faker.bothify("####0");
            if (bothify.charAt(0) == '0') {
                int num = Integer.parseInt(bothify);
                System.out.println(bothify);
                System.out.println(num);
            }
        }
    }

    //카드 이용내역 더미 생성기
    @Test
    public void cardHistoryDummy() {
        Faker faker = new Faker(new Locale("ko"));
        //혜택리스트 154개
        BenefitList[] values = BenefitList.values();

        for (int i = 0; i < 9000; i++) {
            int cardUuid = faker.number().numberBetween(1, 11);
            if(cardUuid == 2) continue;

            int benefitidx = faker.number().numberBetween(0, 154);

            PaymentRequestDto build = PaymentRequestDto.builder()
                    .cardUuid(cardUuid)
                    .requestPrice(Integer.parseInt(faker.bothify("####0")))
                    .category(values[benefitidx].getCategory())
                    .store(values[benefitidx].getStoreName())
                    .transactionType(TransactionType.일시불)
                    .build();

            System.out.println(i);

            PaymentRequestDto paymentRequestDto = paymentService.checkBenefit(build);
            paymentService.payment(paymentRequestDto);
        }
    }

    @Test
    public void test2() {
        Faker faker = new Faker(new Locale("ko"));
        List<CardHistory> all = cardHistoryRepository.findAll();

        for (CardHistory cardHistory : all) {
            int month = faker.number().numberBetween(8, 11);
            System.out.println(month);
            int day;
            int h = faker.number().numberBetween(0,23);
            int m = faker.number().numberBetween(0,59);
            int s = faker.number().numberBetween(0,59);

            if(month == 8)
                day = faker.number().numberBetween(1, 31);
            else if(month == 9)
                day = faker.number().numberBetween(1, 30);
            else
                day = faker.number().numberBetween(1, 5);

            LocalDateTime dateTime = LocalDateTime.of(2023, month, day, h, m, s);

            cardHistory.setTransactionDate(dateTime);
            cardHistoryRepository.save(cardHistory);
        }
    }
}
