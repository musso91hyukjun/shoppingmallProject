package com.project.shoppingmall.domain;

import lombok.Getter;

@Getter
public enum OrderStatus {
    ORDERED, PAYMENT_CONFIRMED, PREPARING_FOR_SHIPPING, SHIPPED, DELIVERED, CANCELED
}
