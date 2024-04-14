package com.project.shoppingmall.service;

import com.project.shoppingmall.domein.Member;
import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@Transactional
class MemberServiceTest {

    @Autowired
    EntityManager em;
    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Test
    public void join() {

        Member member = new Member("test", "kwon", "1234");
        MemberDto savedMember = memberService.join(member.toDto());
        Member findMember = memberRepository.findById(savedMember.getId())
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id : " + savedMember.getId()));

        assertThat(member.getUserid()).isEqualTo(findMember.getUserid());
        passwordEncoder.matches(member.getPassword(), findMember.getPassword());
    }

    @Test
    public void duplicateMember(){
        Member member = new Member("test", "kwon", "1234");
        MemberDto savedMember = memberService.join(member.toDto());

        Member member2 = new Member("test", "kwon", "1234");

        boolean isException = false;

        assertThrows(IllegalStateException.class, () -> memberService.join(member2.toDto()));

        try {
            memberService.join(member2.toDto());
        } catch (IllegalStateException e) {
            isException = true;
            assertEquals("중복된 회원입니다", e.getMessage());
        }

        assertTrue(isException);

    }


}