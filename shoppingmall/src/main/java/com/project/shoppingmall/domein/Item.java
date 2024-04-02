package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "ITEM_ID")
    private Long id;

    private String name;
    private int price;
    private int stock;
    private String category;
    private ItemSize size;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CART_ID")
    private Cart itemCart;

    @OneToMany(mappedBy = "item")
    List<OrderItem> orderItems = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    private ItemInfo itemInfo;
}
