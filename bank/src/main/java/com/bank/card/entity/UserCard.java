package com.bank.card.entity;

import com.bank.account.entity.Account;
import jakarta.persistence.*;

@Entity
@Table(name = "user_card")
public class UserCard {

    @Id @GeneratedValue
    @Column(name = "card_uuid")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    private Card card;

    @Column(name = "card_nickname")
    private String cardNickName;

    @Column(name = "serial_number")
    private String serialNumber;

    @Column(name = "user_performance")
    private Integer userPerformance;

    @Column(name = "is_performanced")
    private Boolean isPerformanced;
}
