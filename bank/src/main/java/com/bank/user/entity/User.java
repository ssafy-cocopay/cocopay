package com.bank.user.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer uuid;

    @Column(length = 30 ,nullable = false)
    private String email;

    @Column(length = 75, nullable = false)
    private String password;

    @Column(length = 30, nullable = false)
    private String name;

    @Column(length = 13, nullable = false, unique = true)
    private String tel;

    @CreatedDate
    @Column(nullable = false)
    private LocalDateTime registedDate = LocalDateTime.now();

    private LocalDateTime withdrawDate;
}
