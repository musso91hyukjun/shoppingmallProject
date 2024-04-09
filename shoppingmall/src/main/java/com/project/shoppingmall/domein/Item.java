package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "ITEM_ID")
    private Long id;

    private String name;
    private int price;
    private int stock;

    @Enumerated(STRING)
    private ItemCategory category;

    @Enumerated(STRING)
    private ItemSize size;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "CART_ITEM_ID")
    private CartItem cartItem;

    @OneToMany(mappedBy = "item")
    List<OrderItem> orderItems = new ArrayList<>();

    @OneToMany(mappedBy = "item")
    List<CartItem> cartItems = new ArrayList<>();

    @OneToOne(fetch = LAZY)
    private ItemInfo itemInfo;

    충돌기대중
    충돌나라
    해결한번해봅시다
    //1212421

    // 굿굿 잘되네요
}
