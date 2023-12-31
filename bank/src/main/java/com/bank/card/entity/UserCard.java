package com.bank.card.entity;

import com.bank.account.entity.Account;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "user_card")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_uuid")
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    private Card card;

    @Column(name = "password", length = 75, nullable = false)
    private String password;

    @Column(name = "card_nickname", length = 20)
    private String cardNickname;

    @Column(name = "serial_number", length = 20, nullable = false)
    private String serialNumber;

    @Column(name = "is_performanced")
    private Boolean isPerformanced;

    @Column(name = "valid_date", length = 5, nullable = false)
    private String validDate;

    @Column(name = "cvc", length = 3, nullable = false)
    private String cvc;

    @Column(name = "performance_level")
    private Integer performanceLevel;

    @Column(name = "total_price", nullable = false)
    private Integer totalPrice;

    public void addTotalPrice(int totalPrice, int paymentPrice) {
        this.totalPrice = totalPrice + paymentPrice;
    }
}
