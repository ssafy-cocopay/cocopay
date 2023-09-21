package com.cocopay.user.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer id;

    @Column(name = "uuid")
    private Integer uuid;

    @Column(name = "name", length = 10, nullable = false)
    private String name;

    @Column(name = "password", length = 75, nullable = false)
    private String password;

    @Column(name = "tel", length = 13, nullable = false,unique = true)
    private String tel;

    private String birth;

    @Column(name = "age", nullable = false)
    private Integer age;

    @CreatedDate
    @Column(name ="registed_date", nullable = false)
    private LocalDateTime registedDate = LocalDateTime.now();

    private LocalDateTime withdrawDate;

    @Column(name = "sign_image")
    private String signImage;

    @Column(name = "recommend_type")
    private boolean recommendType;

    @Column(name = "app_password",length = 75)
    private String appPassword;

    @Column(name = "fingerprint")
    private boolean fingerprint;

    @Column(name = "phone_uuid")
    private String phoneUuid;
}
