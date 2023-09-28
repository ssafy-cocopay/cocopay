package com.cocopay.user.controller;

import com.cocopay.redis.service.AuthKeyService;
import com.cocopay.exception.dto.CustomException;
import com.cocopay.exception.dto.ErrorCode;

import com.cocopay.payment.service.PaymentService;
import com.cocopay.user.dto.request.*;
import com.cocopay.user.dto.response.TotalByMonth;
import com.cocopay.user.dto.response.UserCardResponseListDto;
import com.cocopay.user.dto.response.UserJoinResDto;
import com.cocopay.user.mapper.UserMapper;
import com.cocopay.user.service.UserApiCallService;
import com.cocopay.user.service.UserService;
import com.cocopay.usercard.dto.UserCardDto;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import com.cocopay.usercard.service.UserCardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
@Slf4j
public class UserController {

    private final UserService userService;
    private final AuthKeyService authKeyService;
    private final UserApiCallService userApiCallService;
    private final UserCardRepository userCardRepository;
    private final UserMapper userMapper;
    private final PaymentService paymentService;
    private final UserCardService userCardService;

    @PostMapping("/message-auth")
    public ResponseEntity<?> sendAuthMessage(
            @RequestBody AuthRequestDto authRequestDto) {
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
        UserJoinResDto userJoinResDto = userService.join(userJoinDto);

        return ResponseEntity.ok(userJoinResDto);
    }

    @PostMapping("/login/password")
    public ResponseEntity<?> loginByPassword(@RequestHeader("userId") int userId, @RequestBody LoginRequestDto loginRequestDto) {
        loginRequestDto.setUserId(userId);
        userService.login(loginRequestDto);

        return ResponseEntity.ok("OK");
    }


    @PostMapping("/login/bio")
    public ResponseEntity<?> loginByBio() {
        return null;
    }


    //경로 관련 이슈
    //userId가 헤더에 담아서 오나요..?
    @PutMapping("")
    public ResponseEntity<?> updateUserInfo(@RequestHeader("userId") int userId, @RequestBody UserUpdateDto userUpdateDto)
    {
        userService.updateUserInfo(userId, userUpdateDto);

        return ResponseEntity.ok("OK");
    }

    //비밀번호 체크
    @PostMapping("/check")
    public ResponseEntity<?> checkPassword(@RequestHeader("userId") int userId, @RequestBody CheckPasswordDto checkPasswordDto) {
        checkPasswordDto.setUserId(userId);
        if (!userService.checkPassword(checkPasswordDto))
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        return ResponseEntity.ok("OK");
    }

    //비밀번호 변경
    @PutMapping("/password")
    public ResponseEntity<?> updatePassword(@RequestHeader("userId") int userId, @RequestBody PasswordUpdateDto passwordUpdateDto) {
        passwordUpdateDto.setUserId(userId);
        userService.updatePassword(passwordUpdateDto);
        return ResponseEntity.ok("OK");
    }

    // 사용자 카드 불러오기
    @GetMapping("/card")
    public ResponseEntity<?> getUserCardList(@RequestHeader("userId") int userId) {
        userService.checkUser(userId);
        UserCardResponseListDto result = userApiCallService.getUserCardFromBank(userId);
        List<UserCardDto> userCardList = result.getUserCardList();
        userCardList = userCardService.cardNumEncryption(userCardList);
        userService.insertUserCard(userCardList, userId);
        return ResponseEntity.ok(result);
    }

    @GetMapping()
    public ResponseEntity getTotalByMonth(@RequestHeader ("userId") int userId) {
        log.info("userId : {}", userId);
        log.info("메인페이지 한 달 사용내역 및 할인 받은 금액 조회");
        int month = LocalDateTime.now().getMonth().getValue();
        log.info("month : {}", month);

        List<UserCard> userCardList = userCardRepository.findUserCardListByCocoType(userId);

        List<Integer> cardUuidList = paymentService.getCardUuidList(userCardList);

        TotalByMonthReqDto totalByMonthReqDto = userMapper.toTotalByMonthReqDto(cardUuidList, month);

        TotalByMonth resDto = userApiCallService.getTotalByMonth(totalByMonthReqDto);
        return ResponseEntity.ok(resDto);
    }

}
