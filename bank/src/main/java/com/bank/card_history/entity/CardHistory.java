package com.bank.card_history.entity;

import com.bank.card.entity.UserCard;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
@Table(name = "card_history")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CardHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_history_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_uuid")
    private UserCard userCard;

    @Column(name = "transaction_date")
    @Builder.Default
    private LocalDateTime transactionDate = LocalDateTime.now();

    @Column(name = "amount", nullable = false)
    private Long amount;

    @Column(name = "store", nullable = false, length = 20)
    private String store;

    @Column(name = "account_balance", nullable = false)
    private Long accountBalance;

    @Column(name = "discount_amount")
    private Integer discountAmount;

    @Column(name = "discount_type")
    @Enumerated(EnumType.STRING)
    private DiscountType discountType;

    @Column(name = "transaction_type")
    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(name = "is_payback", columnDefinition = "tinyint")
    @ColumnDefault("0")
    private Boolean isPayback;
}
