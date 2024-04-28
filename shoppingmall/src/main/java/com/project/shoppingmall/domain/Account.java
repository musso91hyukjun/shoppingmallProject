package com.project.shoppingmall.domain;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    private String bankName;
    private String accountNumber;
    private String accountHolderName;

}
