package com.cocopay.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    /* 예시 */
    TEST_NOT_FOUND(HttpStatus.NOT_FOUND, "대충 꼴받는 메시지 작성해주시면 됩니다."),

    //user 관련 예외
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "해당하는 정보의 사용자를 찾을 수 없습니다."),
    INVALID_EMAIL(HttpStatus.BAD_REQUEST, "잘못된 이메일 형식입니다."),
    DUPLICATE_USER_EMAIL(HttpStatus.CONFLICT, "중복된 이메일입니다."), // 409 : CONFLICT
    DUPLICATE_USER_NICKNAME(HttpStatus.CONFLICT, "중복된 닉네임입니다."), // 409 : CONFLICT
    INVALID_AUTH_TOKEN(HttpStatus.UNAUTHORIZED, "권한 정보가 없는 토큰입니다."),
    EXPIRED_AUTH_TOKEN(HttpStatus.CONFLICT, "토큰이 만료되었습니다."),
    INVALID_PASSWORD(HttpStatus.NOT_FOUND, "비밀번호가 일치하지 않습니다."),
    NOT_FOUND_AUTH_TOKEN(HttpStatus.BAD_REQUEST, "토큰 정보가 없습니다."),
    INVALID_PHONE_NUMBER(HttpStatus.BAD_REQUEST, "유효하지 않은 전화번호 입니다."),
    INVALID_AUTH_CODE(HttpStatus.NOT_FOUND, "인증코드가 일치하지 않습니다."),
    DUPLICATE_USER(HttpStatus.CONFLICT, "이미 가입한 회원입니다."),

    //추가할 것들은 여기에 작성해주세요.
    DUPLICATE_CARD(HttpStatus.CONFLICT, "이미 등록된 카드입니다."),
    NOT_FOUND_USER_CARD(HttpStatus.NOT_FOUND, "카드를 찾을 수 없습니다."),

    //utils
    FCMTOKEN_NOT_FOUND(HttpStatus.NOT_FOUND, "FCM 토큰 정보가 없습니다."),

    //기타
    DUPLICATE_RESOURCE(HttpStatus.CONFLICT, "데이터가 이미 존재합니다."),
    INPUT_EXCEPTION(HttpStatus.BAD_REQUEST, "입력값을 확인하세요"),
    KAKAO_ERROR(HttpStatus.BAD_REQUEST, "카카오 오류"),
    DATA_NOT_FOUND(HttpStatus.NOT_FOUND, "데이터가 존재하지 않습니다."),
    WEATHER_NOT_FOUND(HttpStatus.NOT_FOUND, "날씨 정보를 가져오는데 실패했습니다."),
    CARDTYPE_NOT_INVALID(HttpStatus.BAD_REQUEST, "타입이 유효하지 않습니다."),
    ;

    private final HttpStatus httpStatus;
    private final String message;

}
