package com.project.shoppingmall.dto;

import com.project.shoppingmall.domein.*;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {

    private Long id;
    private String userid;
    private String password;
    private String username;
    private String tel;
    private int mileage;
    private Address address;
    private Account account;
    private UserTypes userType;
    private Cart cart;

    public MemberDto(Member member) {

        this.userid = member.getUserid();
        this.password = member.getPassword();
        this.username = member.getUsername();
        this.tel = member.getTel();
        this.mileage = member.getMileage();
        this.address = member.getAddress();
        this.account = member.getAccount();
        this.userType = member.getUserType();
        this.cart = member.getCart();
    }

    public Member toEntity() {

        return new Member
                (id, userid, password,
                username, tel, mileage, address,
                account, userType, cart);
    }

}
