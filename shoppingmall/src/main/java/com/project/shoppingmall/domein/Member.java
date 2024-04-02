package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.FetchType.*;


@Entity
@Getter @Setter
public class Member {

    @Id
    @GeneratedValue
    @Column(name = "MEMBER_ID")
    private Long id;
    private String userid;
    private String password;
    private String name;
    private String tel;
    private String address;
    private String type;

    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>();

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "INFO_ID")
    private Info info;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "CART_ID")
    private Cart cart;
}
