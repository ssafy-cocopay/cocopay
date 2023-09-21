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
import java.util.List;
import java.util.Locale;

@SpringBootTest
public class DummyTest {

    Faker faker = new Faker(new Locale("ko"));

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserCardRepository userCardRepository;

    //회원가입
    @Test
    public void UserDummy() {
        User user = new User();
        user.setUuid(1);
        user.setPassword("1234");
        user.setName("한성현");
        user.setTel("010-5136-5349");
        user.setBirth("960205");
        user.setAge(28);
        user.setRegistedDate(LocalDateTime.now());
        user.setSignImage("url");
        user.setRecommendType(false);
        user.setAppPassword("123456");

        User save = userRepository.save(user);
        
        //회원가입 이후 코코카드까지 만들어버림
        UserCard userCard = makeUserCard(save, true);
        userCard.setCardUuid(1);
        userCardRepository.save(userCard);
    }

    @Test
    public void cardDummy() {
        int userId = 1;

        User fingUser = userRepository.findById(userId).get();

        UserCard userCard = makeUserCard(fingUser, false);

        int size = userCardRepository.findAll().size();

        userCard.setCardOrder(size + 1);
        userCard.setCardUuid(size + 1);

        userCardRepository.save(userCard);
    }

    public UserCard makeUserCard(User user, boolean cocoType) {
        UserCard userCard = new UserCard();

        userCard.setUser(user);
        userCard.setCocoType(cocoType);
        userCard.setSerialNumber(faker.numerify("####-####-####-####"));
        userCard.setCardName("카드이름");
        userCard.setValidDate("12-25");
        userCard.setVisa(true);
        userCard.setMaster(true);
        userCard.setCardDefaultImage("url");

        return userCard;
    }
}
