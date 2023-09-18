package com.bank.performance.entity;

import com.bank.card.entity.Card;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "performance")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Performance {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "performance_id")
    private Integer id;

    //실적
    @Column(name = "level")
    private Integer level;

    //조건 금액
    @Column(name = "level_price")
    private Integer levelPrice;

    // mapping
    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

}
