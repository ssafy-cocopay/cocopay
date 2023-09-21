package com.cocopay.user.controller;

import com.cocopay.redis.redishash.service.AuthKeyService;
import com.cocopay.user.dto.request.AuthCheckDto;
import com.cocopay.user.dto.request.AuthRequestDto;
import com.cocopay.user.dto.request.LoginRequestDto;
import com.cocopay.user.dto.request.UserJoinDto;
import com.cocopay.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
@Slf4j
public class UserController {

    private final UserService userService;
    private final AuthKeyService authKeyService;

    @PostMapping("/message-auth")
    public ResponseEntity<?> sendAuthMessage(@RequestBody AuthRequestDto authRequestDto) {
        String code = userService.sendRandomMessage(authRequestDto.getTel());

        //redis에 code 저장
        authKeyService.saveAuthMessage(authRequestDto.getTel(), code);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/auth-check")
    public ResponseEntity<?> checkAuthMessage(@RequestBody AuthCheckDto authCheckDto) {
        log.info("문자 인증 확인 요청");
        if (!userService.checkAuthMessage(authCheckDto.getTel(), authCheckDto.getCode()))
            throw new RuntimeException();
        return ResponseEntity.ok("OK");
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody UserJoinDto userJoinDto) {
        userService.join(userJoinDto);

        return ResponseEntity.ok("OK");
    }

    @PostMapping("/login/password")
    public ResponseEntity<?> loginByPassword(@RequestBody LoginRequestDto loginRequestDto) {
        userService.login(loginRequestDto);

        return ResponseEntity.ok("OK");
    }

    @PutMapping("/password")
    public ResponseEntity<?> updatePassword(){
        return null;
    }

    @PostMapping("/login/bio")
    public ResponseEntity<?> loginByBio() {
        return null;
    }


    //경로 관련 이슈
    //userId가 헤더에 담아서 오나요..?
    @PutMapping("/fingerprint/{userId}/{fingerprint}")
    public ResponseEntity<?> updateFingerPrint(@PathVariable Integer userId, @PathVariable Boolean fingerprint) {
        userService.updateFingerPrint(userId, fingerprint);
        return ResponseEntity.ok("OK");
    }

    @PutMapping("/barcode/{userId}/{barcode}")
    public ResponseEntity<?> updateBarcode(@PathVariable Integer userId, @PathVariable Boolean barcode) {
        userService.updateBarcode(userId, barcode);
        return ResponseEntity.ok("OK");
    }

    @PutMapping("/recommend/{userId}/{recommend_type}")
    public ResponseEntity<?> updateRecommendType(@PathVariable Integer userId,
                                                 @PathVariable("recommend_type") Boolean recommendType) {
        userService.updateRecommendType(userId, recommendType);
        return ResponseEntity.ok("OK");
    }


}
