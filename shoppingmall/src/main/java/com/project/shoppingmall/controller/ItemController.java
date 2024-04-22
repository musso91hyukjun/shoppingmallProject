package com.project.shoppingmall.controller;


import com.project.shoppingmall.domein.Item;
import com.project.shoppingmall.domein.ItemCategory;
import com.project.shoppingmall.dto.ItemDto;
import com.project.shoppingmall.repository.ItemRepository;
import com.project.shoppingmall.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static com.project.shoppingmall.domein.ItemCategory.MAN_TOP;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;
    private final ItemRepository itemRepository;

    @GetMapping("/man")
    public Result man () {

        List<ItemCategory> itemCategories = ItemCategory.startsWithMan();
        List<Item> itemByCategory = itemRepository.findByCategoryIn(itemCategories);
        List<ItemDto> itemDto = itemByCategory.stream()
                .map(i -> new ItemDto(i.getId(), i.getName(), i.getPrice(), i.getStock(),
                        i.getCategory(), i.getSize(), i.getItemInfo()))
                .collect(Collectors.toList());

        return new Result(itemDto);
    }

    @GetMapping("/woman")
    public Result woman(){

        List<ItemCategory> itemCategories = ItemCategory.startsWithWoman();
        List<Item> itemByCategory = itemRepository.findByCategoryIn(itemCategories);
        List<ItemDto> itemDto = itemByCategory.stream()
                .map(i -> new ItemDto(i.getId(), i.getName(), i.getPrice(), i.getStock(),
                        i.getCategory(), i.getSize(), i.getItemInfo()))
                .collect(Collectors.toList());
        return new Result(itemDto);
    }

    @Data
    @AllArgsConstructor
    static class Result<T> {

        private T data;
    }
}
