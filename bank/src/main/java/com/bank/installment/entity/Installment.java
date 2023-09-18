package com.bank.installment.entity;

import com.bank.card.entity.UserCard;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "installment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Installment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //결제 예정 금액
    @Column(name = "division_price")
    private Integer division_price;

    //총 금액
    @Column(name = "total")
    private Integer total;

    //할부기간
    @Column(name = "period")
    private Integer period;

    //결제 횟수
    @Column(name = "payment_count")
    private Integer paymentCount;

    //이용날짜
    @Column(name = "transaction_date")
    private Integer transactionDate;

    //mapping
    @ManyToOne
    @JoinColumn(name = "card_uuid")
    private UserCard userCard;
}
