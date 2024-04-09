package com.project.shoppingmall.domein;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.FetchType.*;

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

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "CART_ID")
    private Cart cart;

    public Member(Long id, String userid, String password, String name, String tel, int mileage, Address address, Account account, UserTypes userType) {
        this.id = id;
        this.userid = userid;
        this.password = password;
        this.name = name;
        this.tel = tel;
        this.mileage = mileage;
        this.address = address;
        this.account = account;
        this.userType = userType;
    }
}
