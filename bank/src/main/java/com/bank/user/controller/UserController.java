package com.bank.user.controller;

import com.bank.user.dto.UserFindDto;
import com.bank.user.dto.UserRegistDto;
import com.bank.user.dto.UserResponseDto;
import com.bank.user.entity.User;
import com.bank.user.mapper.UserMapper;
import com.bank.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/bank/user")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    //사용자 등록
    @PostMapping("/regist")
    public ResponseEntity registUser(@RequestBody UserRegistDto userRegistDto) {
        userService.registUser(userMapper.userRegistDtoToUser(userRegistDto));

        return ResponseEntity.ok("회원가입 완료");
    }

    //사용자 조회
    @GetMapping
    public ResponseEntity findUser(@RequestBody UserFindDto userFindDto) {
        User user = userService.findUser(userFindDto.getUuid(), userFindDto.getTel());

        UserResponseDto userResponseDto = userMapper.userToUserResponseDto(user);

        return ResponseEntity.ok(userResponseDto);
    }

    //사용자 탈퇴
    @DeleteMapping("/{uuid}")
    public ResponseEntity deleteUser(@PathVariable("uuid") Integer uuid) {
        userService.deleteUser(uuid);

        return ResponseEntity.ok("회원 탈퇴 완료");
    }
}
