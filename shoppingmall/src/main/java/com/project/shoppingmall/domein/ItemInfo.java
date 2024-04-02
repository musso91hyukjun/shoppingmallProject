package com.project.shoppingmall.domein;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;

import java.io.File;

@Entity
@Getter
public class ItemInfo {

    @Id @GeneratedValue
    @Column(name = "ITEM_INFO_ID")
    private Long id;
    private File preview;
    private File content;

}
