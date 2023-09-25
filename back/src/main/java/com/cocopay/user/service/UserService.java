package com.cocopay.user.service;

import com.cocopay.redis.redishash.key.AuthHash;
import com.cocopay.redis.redishash.repository.AuthHashRepository;
import com.cocopay.user.dto.request.*;
import com.cocopay.user.dto.response.UserFindResponseDto;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.dto.UserCardDto;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import com.cocopay.util.Naver_Sens_V2;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final AuthHashRepository authHashRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserCardRepository userCardRepository;
    private final UserApiCallService userApiCallService;

    public String sendRandomMessage(String tel) {
        Naver_Sens_V2 message = new Naver_Sens_V2();
        Random rand = new Random();
        String numStr = "";
        for (int i = 0; i < 6; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr += ran;
        }
        System.out.println("회원가입 문자 인증 => " + numStr);

        message.send_msg(tel, numStr);

        return numStr;
    }

    public Boolean checkAuthMessage(String tel, String code) {
        AuthHash authHash = authHashRepository.findById(tel).orElseThrow();

        return authHash.getCode().equals(code);
    }


    public void join(UserJoinDto userJoinDto) {
        // 똑같은 번호 있으면 빠꾸시켜야됨

        // uuid 불러오기
        UserFindResponseDto result = userApiCallService.getUserUuid(new UserFindRequestDto(userJoinDto.getTel()));

        // 저장
        User user = User.builder()
                .uuid(result.getUuid())
                .name(userJoinDto.getName())
                .age(0)
                .birth(userJoinDto.getBirth())
                .tel(userJoinDto.getTel())
                .password(passwordEncoder.encode(userJoinDto.getPassword()))
                .build();

        userRepository.save(user);

        // 사용자카드 코코페이 저장
        UserCard userCard = UserCard.builder()
                .user(user)
                .cocoType(true)
                .cardUuid(null)
                .serialNumber(null)
                .cardOrder(1)
                .build();
        userCardRepository.save(userCard);


    }

    public void login(LoginRequestDto loginRequestDto) {
        User findUser = userRepository.findById(loginRequestDto.getUserId())
                .orElseThrow(() -> new RuntimeException("잘못된 요청"));

        if (!passwordEncoder.matches(loginRequestDto.getPassword(), findUser.getPassword())) {
            throw new RuntimeException("비밀번호 틀림");
        }
    }

    public void updateFingerPrint(Integer userId, Boolean fingerprint) {
        User findUser = findUserById(userId);

        findUser.setFingerprint(fingerprint);
        userRepository.save(findUser);
    }

    public void updateBarcode(Integer userId, Boolean barcode) {
        User findUser = findUserById(userId);

        findUser.setBarcode(barcode);
        userRepository.save(findUser);
    }

    public void updateRecommendType(Integer userId, Boolean recommendType) {
        User findUser = findUserById(userId);

        findUser.setRecommendType(recommendType);
        userRepository.save(findUser);
    }

    public boolean checkPassword(CheckPasswordDto checkPasswordDto) {
        System.out.println(checkPasswordDto.getUserId());
        User findUser = userRepository.findById(checkPasswordDto.getUserId())
                .orElseThrow(() -> new RuntimeException("잘못된 요청"));

        return passwordEncoder.matches(checkPasswordDto.getPassword(), findUser.getPassword());
    }

    public void updatePassword(PasswordUpdateDto passwordUpdateDto) {
        User findUser = userRepository.findById(passwordUpdateDto.getUserId())
                .orElseThrow(() -> new RuntimeException("잘못된 요청"));

        findUser.setPassword(passwordEncoder.encode(passwordUpdateDto.getPassword()));
        userRepository.save(findUser);
    }

    public void insertUserCard(List<UserCardDto> userCardList, Integer userId) {
        User findUser = findUserById(userId);
        Integer uuid = findUser.getUuid();

        List<UserCard> list = new ArrayList<>();
        //매퍼
        int cnt = 2;
        for (UserCardDto u : userCardList) {
            UserCard userCard = UserCard.builder()
                    .user(findUser)
                    .cocoType(false)
                    .cardUuid(u.getUserCardId())
                    .serialNumber(u.getSerialNumber())
                    .cardOrder(cnt)
                    .cardType(u.getCardType())
                    .cardName(u.getCardName())
                    .validDate(u.getValidDate())
                    .visa(u.isVisa())
                    .master(u.isMaster())
                    .cardDefaultImage(u.getCardDefaulImage())
                    .build();

            userCardRepository.save(userCard);
            cnt ++;
            //batch 사용 여지 있음
        }
    }

    //유저 찾는 메서드 추가
    public User findUserById(int userId) {
        Optional<User> findUser = userRepository.findById(userId);

        return findUser
                .orElseThrow(() -> new RuntimeException("회원 조회 결과 없음"));
    }

}
