package com.bank.card.domain;

import com.bank.bank.domain.Bank;
import jakarta.persistence.*;

@Entity
@Table(name = "card")
public class Card {

    @Id @GeneratedValue
    @Column(name = "card_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bank_id")
    private Bank bank;

    
}
