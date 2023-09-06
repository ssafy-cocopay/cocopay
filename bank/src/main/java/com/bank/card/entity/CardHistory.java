package com.bank.card.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "card_history")
public class CardHistory {

    @Id @GeneratedValue
    @Column(name = "card_history_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_uuid")
    private UserCard userCard;

    @Column(name = "transaction_date")
    private LocalDateTime transactionDate = LocalDateTime.now();

    @Column(name = "amount")
    private Long amount;

    @Column(name = "store")
    private String store;

    @Column(name = "account_balance")
    private Long accountBalance;
}
