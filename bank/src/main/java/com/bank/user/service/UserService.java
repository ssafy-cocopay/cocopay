package com.bank.user.service;

import com.bank.user.entity.User;
import com.bank.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

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


    //사용자 조회 - uuid로
    public User findUser(Integer uuid, String tel) {
        Optional<User> findUser = userRepository.findUser(uuid,tel);

        //조회 결과 유효한지 판단 후 return
        return findUser
                .orElseThrow(() -> new RuntimeException("회원 조회 결과 없음"));
    }

    //사용자 탈퇴
    public void deleteUser(int uuid) {
        User findUser = findUser(uuid, null);

        findUser.setWithdrawDate(LocalDateTime.now());

        userRepository.save(findUser);
    }
}
