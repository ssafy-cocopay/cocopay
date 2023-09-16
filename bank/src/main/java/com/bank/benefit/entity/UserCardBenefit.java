package com.bank.benefit.entity;

import com.bank.card.entity.Card;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_card_benefit")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCardBenefit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_card_benefit_id")
    private Integer id;

    @Column(name = "discount_amount")
    private Integer discountAmount;

    @ManyToOne
    @JoinColumn(name = "card_uuid")
    private Card card;

    @ManyToOne
    @JoinColumn(name = "benefit_id")
    private Benefit benefit;
}
