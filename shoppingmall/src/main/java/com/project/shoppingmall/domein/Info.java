package com.project.shoppingmall.domein;

import jakarta.persistence.*;
import lombok.Getter;


@Entity
@Getter
public class Info {

    @Id @GeneratedValue
    @Column(name = "INFO_ID")
    private Long id;

    private String gender;
    private String birth;
    private String joinPath;
    private String commend;
    private String account;
    private int mileage;
    private String coupon;
    private String question;
    private String answer;

    @OneToOne(mappedBy = "info")
    private Member member;

}
