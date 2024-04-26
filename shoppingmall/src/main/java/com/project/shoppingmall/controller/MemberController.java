package com.project.shoppingmall.controller;


import com.project.shoppingmall.config.PasswordEncoderConfig;
import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import com.project.shoppingmall.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberRepository memberRepository;
    private final MemberService memberService;


    @PostMapping("/signup")
    private ResponseEntity<String> signup(@RequestBody MemberDto memberDto) {

        return memberService.signup(memberDto);
    }



}
