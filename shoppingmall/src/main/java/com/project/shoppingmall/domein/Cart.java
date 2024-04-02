package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Cart {

    @Id @GeneratedValue
    @Column(name = "CART_ID")
    private Long id;

    @OneToOne(mappedBy = "cart", fetch = FetchType.LAZY)
    private Member member;

    @OneToMany(mappedBy = "itemCart")
    private List<Item> item = new ArrayList<>();


}
