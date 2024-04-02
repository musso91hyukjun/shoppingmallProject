package com.project.shoppingmall.service;

import com.project.shoppingmall.domein.Member;
import com.project.shoppingmall.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    // 회원 가입
    public Long join(Member member) {

        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    // 중복 회원 검사
    private void validateDuplicateMember(Member member) {
        List<Member> savedMember = memberRepository.findByUserid(member.getUserid());
        if(!savedMember.isEmpty()){
            throw new IllegalStateException("이미 존재 하는 회원 입니다");
        }

    }

    // 회원 전체 조회
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }

    // 회원 탈퇴
    public void leave(Long id) {

    }
    // 회원 정보 수정


}
