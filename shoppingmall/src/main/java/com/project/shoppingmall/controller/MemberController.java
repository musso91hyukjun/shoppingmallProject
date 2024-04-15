package com.project.shoppingmall.controller;

import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import com.project.shoppingmall.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody MemberDto member) {

        return memberService.join(member);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberDto> login(@RequestBody MemberDto member){

        return memberService.login(member);
    }

}
