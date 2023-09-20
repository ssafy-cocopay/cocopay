package com.cocopay.user.service;

import com.cocopay.user.dto.UserJoinDto;
import com.cocopay.util.Naver_Sens_V2;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class UserService {
    public String sendRandomMessage(String tel) {
        Naver_Sens_V2 message = new Naver_Sens_V2();
        Random rand = new Random();
        String numStr = "";
        for (int i = 0; i < 6; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr += ran;
        }
        System.out.println("회원가입 문자 인증 => " + numStr);

        //redis에 저장
        message.send_msg(tel, numStr);

        return numStr;
    }


    public void join(UserJoinDto userJoinDto)
    {
        // 문자 인증

        // 비밀번호 암호화

        // 저장
    }

}
