package com.cocopay.payment.service;

import com.cocopay.payment.apicall.ApiCallService;
import com.cocopay.usercard.entity.UserCard;
import com.cocopay.usercard.repository.UserCardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {
    private final UserCardRepository userCardRepository;

    private final ApiCallService apiCallService;

    //온라인 결제
    public void onlinePay(int userId, int cardId, int totalPrice) {
        List<UserCard> findUserCardList = userCardRepository.findUserCardListByCocoType(userId);
    }


}
