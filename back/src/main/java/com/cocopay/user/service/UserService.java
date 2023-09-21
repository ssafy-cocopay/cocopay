package com.cocopay.user.service;

import com.cocopay.redis.redishash.key.AuthHash;
import com.cocopay.redis.redishash.repository.AuthHashRepository;
import com.cocopay.user.dto.request.LoginRequestDto;
import com.cocopay.user.dto.request.UserJoinDto;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.util.Naver_Sens_V2;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class UserService {

    private final AuthHashRepository authHashRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

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

        // 저장
        User user = User.builder()
                .uuid(0)
                .name(userJoinDto.getName())
                .age(0)
                .birth(userJoinDto.getBirth())
                .tel(userJoinDto.getTel())
                .password(passwordEncoder.encode(userJoinDto.getPassword()))
                .build();

        userRepository.save(user);
    }

    public void login(LoginRequestDto loginRequestDto) {
        User findUser = userRepository.findById(loginRequestDto.getUserId())
                .orElseThrow(() -> new RuntimeException("잘못된 요청 응애"));

        if (!passwordEncoder.matches(loginRequestDto.getPassword(), findUser.getPassword())) {
            throw new RuntimeException("비밀번호 틀림 응애");
        }
    }

    public void updateFingerPrint(Integer userId, Boolean fingerprint) {
        User findUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("잘못된 요청"));

        findUser.setFingerprint(fingerprint);
        userRepository.save(findUser);
    }

    public void updateBarcode(Integer userId, Boolean barcode) {
        User findUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("잘못된 요청"));

        findUser.setBarcode(barcode);
        userRepository.save(findUser);
    }

    public void updateRecommendType(Integer userId, Boolean recommendType) {
        User findUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("잘못된 요청"));

        findUser.setRecommendType(recommendType);
        userRepository.save(findUser);
    }

}
