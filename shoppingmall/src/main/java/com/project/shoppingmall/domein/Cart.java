package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

    @Id @GeneratedValue
    @Column(name = "CART_ID")
    private Long id;

    @OneToOne(mappedBy = "cart", fetch = LAZY)
    private Member member;

    @OneToMany(mappedBy = "cart")
    private List<CartItem> cartItems = new ArrayList<>();

}
