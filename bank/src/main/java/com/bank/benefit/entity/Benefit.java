package com.bank.benefit.entity;

import com.bank.card.entity.Card;
import com.bank.card_history.entity.Category;
import com.bank.card_history.entity.DiscountType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "benefit",indexes = @Index(name = "idx__store_name", columnList = "category"))
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Benefit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "benefit_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "discount")
    private Integer discount;

    @Column(name = "benefit_limit")
    private Integer limit;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private DiscountType discountType;
}
