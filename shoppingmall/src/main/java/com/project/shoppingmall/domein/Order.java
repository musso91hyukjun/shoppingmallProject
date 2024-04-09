package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import static jakarta.persistence.EnumType.*;
import static jakarta.persistence.FetchType.*;

@Entity
@Table(name = "ORDERS")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ORDERS_ID")
    private Long id;
    private LocalDateTime orderDate;

    @Enumerated(STRING)
    private OrderStatus orderStatus;

    @JoinColumn(name = "MEMBER_ID")
    @ManyToOne(fetch = LAZY)
    private Member member;




}

