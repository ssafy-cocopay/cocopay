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

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InstallmentService {

    private final InstallmentRepository installmentRepository;
    private final UserCardRepository userCardRepository;


    //할부 등록
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
                .transactionDate(LocalDate.now())
                .build();

        installmentRepository.save(installment);
    }

    //할부 조회
    public List<Installment> findInstallment(Integer id, Integer cardId){
        List<Installment> findInstallment = installmentRepository.findInstallment(id, cardId);

        return findInstallment;
    }
}
