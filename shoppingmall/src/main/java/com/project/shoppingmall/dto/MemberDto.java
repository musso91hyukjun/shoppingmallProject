package com.project.shoppingmall.dto;


import com.project.shoppingmall.domain.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import static jakarta.persistence.FetchType.LAZY;

@Getter @Setter
@ToString
public class MemberDto {


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

    private Cart cart;


    public Member toEntity() {
        return new Member(
                id,
                userid,
                password,
                username,
                tel,
                mileage,
                address,
                account,
                userType,
                cart
        );
    }
}
