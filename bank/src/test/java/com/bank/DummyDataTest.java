package com.bank;

import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.bank.entity.Bank;
import com.bank.bank.repository.BankRepository;
import com.bank.user.entity.User;
import com.bank.user.repository.UserRepository;
import com.bank.user.service.UserService;
import com.github.javafaker.Faker;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;


@SpringBootTest
public class DummyDataTest {

    JPAQueryFactory jpaQueryFactory;

    Faker faker = new Faker(new Locale("ko"));

    //휴대폰 번호 정규식
    String pattern = "^01[0-9]-\\d{4}-\\d{4}$";

    @Autowired
    UserService userService;

    @Autowired
    BankRepository bankRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AccountRepository accountRepository;

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

        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < bankList.size(); j++) {
                Account account = Account.builder()
                        .user(userList.get(i))
                        .bank(bankList.get(j))
                        .num(faker.bothify("#######-##-######"))
                        .registedDate(LocalDateTime.now())
                        .balance(faker.number().numberBetween(0, 100000000))
                        .build();

                accountList.add(account);
            }
        }
        accountRepository.saveAll(accountList);
    }
}
