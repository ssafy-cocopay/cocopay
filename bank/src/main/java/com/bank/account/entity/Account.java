package com.bank.account.entity;

import com.bank.bank.entity.Bank;
import com.bank.user.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "account")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private String id;

    @Column(name = "account_num", length = 19, nullable = false)
    private String num;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int balance;

    @CreatedDate
    @Column(nullable = false)
    private LocalDateTime registedDate = LocalDateTime.now();

    private LocalDateTime withdrawDate;

    //======= 매핑 =======
    @ManyToOne
    @JoinColumn(name = "uuid")
    private User user;

    @ManyToOne
    @JoinColumn(name="bank_id")
    private Bank bank;

}