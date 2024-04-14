package com.project.shoppingmall.service;

import com.project.shoppingmall.domein.Member;
import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;


    public MemberDto join(MemberDto memberDto) {
        duplicateMember(memberDto);
        Member member = memberDto.toEntity();
        String encodePassword = passwordEncoder.encode(member.getPassword());
        member.changePassword(encodePassword);

//        return new MemberDto(memberRepository.save(member));
        return memberRepository.save(member).toDto();
    }


    public void duplicateMember(MemberDto member) {
        List<Member> findMember = memberRepository.findByUserid(member.getUserid());
        if (!findMember.isEmpty()) {
            throw new IllegalStateException("중복된 회원입니다");
        }
    }


}
