package com.bank.account_history.entity;

import com.bank.account.entity.Account;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "account_history")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_history_id")
    private Integer id;

    @CreatedDate
    @Builder.Default
    @Column(nullable = false)
    private LocalDateTime transactionDate = LocalDateTime.now();

    @Column(nullable = false)
    private int amount;

    @Column(nullable = false)
    private boolean status;

    @Column(length = 20, nullable = false)
    private String store;

    @Column(nullable = false)
    private int balance;

    @Column(length = 20, nullable = false)
    private String transaction_type;

    //==== 매핑 ====
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

}
