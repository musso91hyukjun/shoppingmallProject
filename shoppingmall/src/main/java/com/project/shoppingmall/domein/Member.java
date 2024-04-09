package com.project.shoppingmall.domein;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ITEM_ID")
    private Long id;
    private String userid;
    private String password;
    private String name;
    private String tel;
    private int mileage;

    @Embedded
    private Address address;

    @Embedded
    private Account account;

    @Enumerated(EnumType.STRING)
    private UserTypes userType;

    @OneToMany
    private Coupon coupon;

}
