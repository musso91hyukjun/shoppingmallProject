package com.project.shoppingmall.domein;

import lombok.Getter;

@Getter
public enum OrderStatus {
    ORDERED, PAYMENT_CONFIRMED, PREPARING_FOR_SHIPPING, SHIPPED, DELIVERED, CANCELED
}
