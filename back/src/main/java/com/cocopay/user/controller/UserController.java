package com.cocopay.user.controller;

import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;
import com.cocopay.redis.redishash.service.AuthKeyService;
import com.cocopay.user.dto.request.*;
import com.cocopay.user.dto.response.UserCardResponseListDto;
import com.cocopay.user.service.UserApiCallService;
import com.cocopay.user.service.UserService;
import com.cocopay.usercard.dto.UserCardDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
@Slf4j
public class UserController {

    private final UserService userService;
    private final AuthKeyService authKeyService;
    private final UserApiCallService userApiCallService;

    @PostMapping("/message-auth")
    public ResponseEntity<?> sendAuthMessage(@RequestBody AuthRequestDto authRequestDto) {
        if(authRequestDto.getTel().length() != 11)
            throw  new CustomException(ErrorCode.INVALID_PHONE_NUMBER);

        String code = userService.sendRandomMessage(authRequestDto.getTel());

        //redis에 code 저장
        authKeyService.saveAuthMessage(authRequestDto.getTel(), code);

        return ResponseEntity.ok("OK");
    }

    @PostMapping("/auth-check")
    public ResponseEntity<?> checkAuthMessage(@RequestBody AuthCheckDto authCheckDto) {
        log.info("문자 인증 확인 요청");
        if(authCheckDto.getTel().length() != 11)
            throw  new CustomException(ErrorCode.INVALID_PHONE_NUMBER);
        if (!userService.checkAuthMessage(authCheckDto.getTel(), authCheckDto.getCode()))
            throw new CustomException(ErrorCode.INVALID_AUTH_CODE);

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

    //비밀번호 체크
    @PostMapping("/check")
    public ResponseEntity<?> checkPassword(@RequestBody CheckPasswordDto checkPasswordDto)
    {
        if(!userService.checkPassword(checkPasswordDto))
            throw new RuntimeException();
        return ResponseEntity.ok("OK");
    }

    //비밀번호 변경
    @PutMapping("/password")
    public ResponseEntity<?> updatePassword(@RequestBody PasswordUpdateDto passwordUpdateDto)
    {
        userService.updatePassword(passwordUpdateDto);
        return ResponseEntity.ok("OK");
    }

    // 사용자 카드 불러오기
    @GetMapping("/card/{userId}")
    public ResponseEntity<?> getUserCardList(@PathVariable Integer userId) {
        UserCardResponseListDto result = userApiCallService.getUserCardFromBank(userId);
        userService.insertUserCard(result.getUserCardList(), userId);
        return ResponseEntity.ok(result);
    }

}
