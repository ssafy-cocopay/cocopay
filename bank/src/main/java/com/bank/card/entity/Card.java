package com.bank.card.entity;

import com.bank.bank.entity.Bank;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "card")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Card {

    @Id @GeneratedValue
    @Column(name = "card_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bank_id")
    private Bank bank;

    @Column(name = "card_name")
    private String cardName;

    @Column(name = "performance")
    private Integer performance;

    @Column(name = "type")
    private String type;


    /*
    type 부분 string으로 해놓을까? Enum으로 해야되지 않을까?
    DB도 varchar가 아니라 tiny int로 해야 될거같기도 함
     */

    @OneToMany(mappedBy = "card")
    private List<UserCard> userCards = new ArrayList<>();


}
