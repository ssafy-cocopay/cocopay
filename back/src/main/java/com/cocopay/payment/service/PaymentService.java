package com.cocopay.payment.service;

import com.cocopay.payment.apicall.ApiCallService;
import com.cocopay.payment.dto.res.PerformanceResponseListDto;
import com.cocopay.redis.redishash.service.PerformanceKeyService;
import com.cocopay.user.entity.User;
import com.cocopay.user.repository.UserRepository;
import com.cocopay.usercard.repository.UserCardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {
    private final UserCardRepository userCardRepository;

    private final UserRepository userRepository;

    private final ApiCallService apiCallService;

    private final PerformanceKeyService performanceKeyService;

    //온라인 결제
    public void onlinePay(int userId, int cardId, int totalPrice) {
//        List<UserCard> findUserCardList = userCardRepository.findUserCardListByCocoType(userId);
        List<Integer> findUserCardList = new ArrayList<>();
        findUserCardList.add(1);
        findUserCardList.add(2);
        findUserCardList.add(3);
        findUserCardList.add(4);

        log.info("findUserCardList : {}", findUserCardList);

        PerformanceResponseListDto performanceInfoList = apiCallService.userCardPerformanceInfo(findUserCardList);
        performanceKeyService.test(performanceInfoList.getPerformanceList().get(0));
//        //실적 우선, 할인 우선 분기
//        if (findUser(userId).isRecommendType()) {
//
//        } else {
//            performanceFirst();
//        }
    }

    //실적 우선
    public void performanceFirst(PerformanceResponseListDto performanceInfoList) {
        //정렬 조건
        // 1. 실적 단계가 가장 낮은 거
        // 2. 같을 경우 사용자 우선 순위 낮은 거
        //스트림 sorted 람다 처리 또는 comparator 사용

//        List<PerformanceResponseDto> performanceList = performanceInfoList.getPerformanceList();
//        performanceList.stream()
//                .sorted(Comparator.comparing(PerformanceResponseDto::getLevel)
//                        .thenComparing())


    }

    //할인 우선
    //전월실적 달성 여부 필터링 stream filter 사용

    //해당 유저 조회
    //UserService에 생겨야 하는 메서드임
    //해당 부분 UserService에 생기면 제거 후 di하여 사용
    public User findUser(int userId) {
        Optional<User> findUser = userRepository.findById(userId);

        return findUser
                .orElseThrow(() -> new RuntimeException("회원 조회 결과 없음"));
    }

}
