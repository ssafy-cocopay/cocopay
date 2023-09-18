package com.bank.installment.service;

import com.bank.card.entity.Card;
import com.bank.card.entity.UserCard;
import com.bank.card.repository.card.CardRepository;
import com.bank.card.repository.usercard.UserCardRepository;
import com.bank.installment.dto.InstallmentRegistDto;
import com.bank.installment.entity.Installment;
import com.bank.installment.repository.InstallmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InstallmentService {

    private final InstallmentRepository installmentRepository;
    private final UserCardRepository userCardRepository;


    //혜택 등록
    public void resistInstallment(InstallmentRegistDto installmentRegistDto){
        Integer cardUuid = installmentRegistDto.getCardUuid();
        Optional<UserCard> userCard = userCardRepository.findById(cardUuid);
        Integer total = installmentRegistDto.getTotal();
        Integer period = installmentRegistDto.getPeriod();
        Integer divisionPrice = (Integer) total/period;

        Installment installment = Installment.builder()
                .userCard(userCard.get())
                .divisionPrice(divisionPrice)
                .total(total)
                .period(period)
                .paymentCount(0)
                .transactionDate(LocalDateTime.now())
                .build();

        installmentRepository.save(installment);
    }
}
