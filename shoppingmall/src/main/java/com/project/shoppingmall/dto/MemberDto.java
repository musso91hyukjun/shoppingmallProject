package com.project.shoppingmall.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.shoppingmall.domain.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import static com.project.shoppingmall.domain.QMember.member;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {


    @JsonIgnore
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

    public Member toEntity(){

        return new Member(userid, password, username, tel, mileage, address, account, userType, cart);
    }


}
