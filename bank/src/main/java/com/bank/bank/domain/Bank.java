package com.bank.bank.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "bank")
public class Bank {

    @Id @GeneratedValue
    @Column(name = "bank_id")
    private Integer id;

    @Column(name = "bank_name")
    private String bankName;
}
