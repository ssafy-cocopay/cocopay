package com.cocopay.usercard.entity;

import com.cocopay.user.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "user_card")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //코코페이인지
    @Column(name = "coco_type")
    private boolean cocoType;

    @Column(name = "card_uuid", nullable = false)
    private String cardUuid;

    @Column(name = "serial_number", nullable = false, length = 19)
    private String serialNumber;

    @Column(name = "card_order")
    private int cardOrder;

    @CreatedDate
    @Column(name = "registed_date", nullable = false)
    private LocalDateTime registedDate = LocalDateTime.now();

    @Column(name = "withdraw_date")
    private LocalDateTime withdrawDate;

    @Column(name = "card_type")
    private Integer cardType;

    @Column(name = "card_name", length = 50)
    private String cardName;

    @Column(name = "valid_date")
    private String validDate;

    @Column(name = "visa")
    private boolean visa;

    @Column(name = "master")
    private boolean master;

    @Column(name = "card_nickname", length = 50)
    private String cardNickname;

    @Column(name = "card_default_image")
    private String cardDefaultImage;

    @Column(name = "card_custom_image")
    private String cardCustomImage;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
