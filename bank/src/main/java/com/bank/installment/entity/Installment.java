package com.bank.installment.entity;

import com.bank.card.entity.UserCard;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDate;

@Entity
@Table(name = "installment")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Installment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //결제 예정 금액
    @Column(name = "division_price")
    private Integer divisionPrice;

    //총 금액
    @Column(name = "total")
    private Integer total;

    //할부기간
    @Column(name = "period")
    private Integer period;

    //결제 횟수
    @Column(name = "payment_count")
    @ColumnDefault("0")
    private Integer paymentCount;

    //이용날짜
    @Column(name = "transaction_date")
    private LocalDate transactionDate;

    //mapping
    @ManyToOne
    @JoinColumn(name = "card_uuid")
    private UserCard userCard;
}
