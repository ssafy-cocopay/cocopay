package com.cocopay;

import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.security.cert.CRLReason;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Objects;

@SpringBootTest
public class DummyTest {

    Faker faker = new Faker(new Locale("ko"));

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserCardRepository userCardRepository;

    //회원가입
    @Test
    public void test() {
        List<UserCard> bankCardList = new ArrayList<>();
        for (int i = 1; i <= 7; i++) {
            UserCard build = UserCard.builder()
                    .cardUuid(i)
                    .build();
            bankCardList.add(build);
        }
        List<UserCard> cocoCardList = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            UserCard build = UserCard.builder()
                    .cardUuid(i)
                    .build();
            cocoCardList.add(build);
        }
        List<UserCard> list = bankCardList.stream()
                .filter(bankCard -> cocoCardList.stream()
                        .noneMatch(cocoCard -> Objects.equals(cocoCard.getCardUuid(), bankCard.getCardUuid())))
                .toList();


        for (UserCard re : list) {
            System.out.println("필터링한 결과 : " + re.getCardUuid());
        }

    }
}
