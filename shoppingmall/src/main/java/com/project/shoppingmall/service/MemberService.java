package com.project.shoppingmall.service;


import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public ResponseEntity<String> signup(MemberDto memberDto) {
        memberRepository.findByUserid(memberDto.getUserid());

    }

}
