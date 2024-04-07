package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.Getter;


@Entity
@Getter
public class Info {

    @Id @GeneratedValue
    @Column(name = "INFO_ID")
    private Long id;
    private String commend;
    private String account;
    private int mileage;
    private String coupon;

    @OneToOne(mappedBy = "info")
    private Member member;
}
