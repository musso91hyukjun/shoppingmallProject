package com.project.shoppingmall.domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


import static jakarta.persistence.FetchType.*;
import static lombok.AccessLevel.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor(access = PROTECTED)
@Getter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;
    private String userid;
    private String password;
    private String username;
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

    public void changePassword(String encodePassword) {
        this.password = encodePassword;
    }

}
