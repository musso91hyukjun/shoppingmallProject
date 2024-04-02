package com.project.shoppingmall.service;

import com.project.shoppingmall.domein.Member;
import com.project.shoppingmall.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@Transactional
class MemberServiceTest {

    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;
    @Test
    public void join() throws Exception {
        // given
        Member member = new Member();
        member.setName("kim");
        // when
        Long savedId = memberService.join(member);

        // then
        assertEquals(member, memberRepository.findOne(savedId));
    }

}