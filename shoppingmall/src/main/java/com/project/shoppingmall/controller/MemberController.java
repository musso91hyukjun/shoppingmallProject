package com.project.shoppingmall.controller;


import com.project.shoppingmall.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberRepository memberRepository;

    @PostMapping("/save")
    public void savedMember(){
        memberRepository.save();
    }
}
