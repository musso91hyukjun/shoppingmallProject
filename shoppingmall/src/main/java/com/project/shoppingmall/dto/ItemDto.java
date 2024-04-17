package com.project.shoppingmall.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.shoppingmall.domein.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.*;

@AllArgsConstructor
@NoArgsConstructor(access = PROTECTED)
@Getter
public class ItemDto {

    private Long id;
    private String name;
    private int price;
    private int stock;
    private ItemCategory category;
    private ItemSize size;
    @JsonIgnore
    private CartItem cartItem;
    @JsonIgnore
    List<OrderItem> orderItems = new ArrayList<>();
    @JsonIgnore
    List<CartItem> cartItems = new ArrayList<>();
    private ItemInfo itemInfo;

    public ItemDto(Long id, String name, int price, int stock, ItemCategory category, ItemSize size, ItemInfo itemInfo) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.size = size;
        this.itemInfo = itemInfo;
    }
}
