package com.bank.user.service;

import com.bank.user.entity.User;
import com.bank.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    //사용자 등록
    public void registUser(User user) {
        //이메일, 휴대폰 번호 등 회원가입 중복 체크 일단 안함
        
        //비밀번호 암호화
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);
    }

}
