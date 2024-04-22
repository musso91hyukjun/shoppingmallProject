package com.project.shoppingmall.repository;


import com.project.shoppingmall.domein.Item;
import com.project.shoppingmall.domein.ItemCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item,Long> {


    List<Item> findByCategoryIn(Collection<ItemCategory> categories);

}
