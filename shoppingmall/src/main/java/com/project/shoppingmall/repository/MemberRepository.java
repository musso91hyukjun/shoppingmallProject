package com.project.shoppingmall.repository;


import com.project.shoppingmall.domein.Account;
import com.project.shoppingmall.domein.Address;
import com.project.shoppingmall.domein.Member;
import com.project.shoppingmall.domein.UserTypes;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save() {
        Address address = new Address("test", "test", 11111);
        Account account = new Account("woori", "1234", "kim");

        Member member = new Member(1L, "test", "1234", "kim", "010-1111-1111", 3000, address, account, UserTypes.USER);
        em.persist(member);

    }

}
