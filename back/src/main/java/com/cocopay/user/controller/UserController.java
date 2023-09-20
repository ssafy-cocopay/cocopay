package com.cocopay.user.controller;

import com.cocopay.user.dto.AuthRequestDto;
import com.cocopay.user.dto.UserJoinDto;
import com.cocopay.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @PostMapping("/message-auth")
    public ResponseEntity sendAuthMessage(@RequestBody AuthRequestDto authRequestDto)
    {
        String code = userService.sendRandomMessage(authRequestDto.getTel());

        //redis에 code 저장

        return ResponseEntity.ok().build();
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody UserJoinDto userJoinDto)
    {

        userService.join(userJoinDto);
        return null;
    }

    @PostMapping("/login/password")
    public ResponseEntity<?> loginByPassword()
    {
        return null;
    }

    @PostMapping("/login/bio")
    public ResponseEntity<?> loginByBio()
    {
        return null;
    }
}
