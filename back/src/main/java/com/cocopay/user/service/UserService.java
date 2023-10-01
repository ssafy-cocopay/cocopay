package com.cocopay.user.service;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;

import com.cocopay.redis.key.AuthHash;
import com.cocopay.redis.repository.AuthHashRepository;
import com.cocopay.redis.service.FcmKeyService;
import com.cocopay.user.dto.request.*;
import com.cocopay.user.dto.response.UserCardResponseListDto;
import com.cocopay.user.dto.response.UserFindResponseDto;
import com.cocopay.user.dto.response.UserJoinResDto;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.dto.UserCardDto;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import com.cocopay.usercard.service.UserCardService;
import com.cocopay.util.fcm.service.FcmService;
import com.cocopay.util.sens.Naver_Sens_V2;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final AuthHashRepository authHashRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserCardRepository userCardRepository;
    private final UserApiCallService userApiCallService;
    private final FcmKeyService fcmKeyService;
    private final UserCardService userCardService;


    public User getAuthInformation(int userId){
        return userRepository.findById(userId).get();
    }

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

    public void quit(int userId) {
        User user = checkUser(userId);
        userRepository.delete(user);
    }


    public UserJoinResDto join(UserJoinDto userJoinDto) {
        // 똑같은 번호 있으면 빠꾸시켜야됨
        userRepository.findByTel(userJoinDto.getTel())
                .ifPresent(user -> {
                    throw new CustomException(ErrorCode.DUPLICATE_USER);
                });

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

        int userId = userRepository.save(user).getId();

        // 사용자카드 코코페이 저장
        UserCard userCard = UserCard.builder()
                .user(user)
                .cocoType(true)
                .cardUuid(null)
                .serialNumber(null)
                .cardOrder(0)
                .cardDefaultImage("https://storage.googleapis.com/cocopay/cocopay.png")
                .build();
        userCardRepository.save(userCard);
        return new UserJoinResDto(userId);
    }

    public User checkUser(int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
    }

    public void login(LoginRequestDto loginRequestDto) {
        User findUser = checkUser(loginRequestDto.getUserId());

        if (!passwordEncoder.matches(loginRequestDto.getPassword(), findUser.getPassword())) {
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        }

        //fcm token redis에 저장
        fcmKeyService.saveFcmKey(String.valueOf(loginRequestDto.getUserId()), loginRequestDto.getFcmToken());
    }

    public void updateUserInfo(int userId, UserUpdateDto userUpdateDto) {
        User findUser = checkUser(userId);

        Optional.ofNullable(userUpdateDto.getBarcode())
                .ifPresent(findUser::setBarcode);

        Optional.ofNullable(userUpdateDto.getFingerprint())
                .ifPresent(findUser::setFingerprint);

        Optional.ofNullable(userUpdateDto.getRecommendType())
                .ifPresent(findUser::setRecommendType);

        userRepository.save(findUser);
    }


    public boolean checkPassword(CheckPasswordDto checkPasswordDto) {
        User findUser = checkUser(checkPasswordDto.getUserId());

        return passwordEncoder.matches(checkPasswordDto.getPassword(), findUser.getPassword());
    }

    public void updatePassword(PasswordUpdateDto passwordUpdateDto) {
        User findUser = checkUser(passwordUpdateDto.getUserId());

        findUser.setPassword(passwordEncoder.encode(passwordUpdateDto.getPassword()));
        userRepository.save(findUser);
    }

    public void insertUserCard(List<UserCardDto> userCardList, Integer userId) {
        User findUser = checkUser(userId);

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
            cnt++;
            //batch 사용 여지 있음
        }
    }

    //코코페이와 은행카드의 동기화이전에 중복을 걸러주는 메소드입니다.
    public List<UserCardDto> checkDuplicate(List<UserCardDto> bankCardList, int userId) {
        bankCardList.get(0).getUserCardId();
        List<UserCard> userCardList = userCardService.findUserCardList(userId);
        List<UserCardDto> result = bankCardList.stream()
                .filter(bankCard -> userCardList.stream()
                        .noneMatch(cocoCard -> Objects.equals(bankCard.getUserCardId(), cocoCard.getCardUuid())))
                .toList();

        return result;
    }
}
