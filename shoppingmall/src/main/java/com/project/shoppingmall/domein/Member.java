package com.project.shoppingmall.domein;


import com.project.shoppingmall.dto.MemberDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


import static jakarta.persistence.FetchType.*;
import static lombok.AccessLevel.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = PROTECTED)
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

    public Member(String userid, String password, String username, String tel, int mileage, Address address, Account account, UserTypes userType, Cart cart) {
        this.userid = userid;
        this.password = password;
        this.username = username;
        this.tel = tel;
        this.mileage = mileage;
        this.address = address;
        this.account = account;
        this.userType = userType;
        this.cart = cart;
    }

    public Member(String userid, String name, String password) {
        this.userid = userid;
        this.username = name;
        this.password= password;
    }

    public void changePassword(String encodePassword) {
        this.password = encodePassword;
    }

    public MemberDto toDto() {
        return new MemberDto(
                id, userid, password,
                username, tel, mileage, address,
                account, userType, cart
        );
    }
}
