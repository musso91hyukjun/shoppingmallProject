package com.project.shoppingmall.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.File;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ItemInfo {

    @Id @GeneratedValue
    @Column(name = "ITEM_INFO_ID")
    private Long id;
    private File preview;
    private File content;

}
