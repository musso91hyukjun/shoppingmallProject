package com.project.shoppingmall.domain;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public enum ItemCategory {
    MAN_OUTWEAR,
    MAN_TOP,
    MAN_BOTTOM,
    MAN_ACC,
    WOMAN_OUTWEAR,
    WOMAN_TOP,
    WOMAN_BOTTOM,
    WOMAN_ACC;

    /**
     * 아이템 카테고리중 MAN으로 시작하는 상수들을 리스트로 반환
     */
    public static List<ItemCategory> startsWithMan() {
        return Arrays.stream(ItemCategory.values())
                .filter(c -> c.name().startsWith("MAN"))
                .collect(Collectors.toList());
    }

    /**
     * 아이템 카테고리중 WOMAN으로 시작하는 상수들을 리스트로 반환
     */
    public static List<ItemCategory> startsWithWoman() {

        return Arrays.stream(ItemCategory.values())
                .filter(c -> c.name().startsWith("WOMAN"))
                .collect(Collectors.toList());
    }
}
