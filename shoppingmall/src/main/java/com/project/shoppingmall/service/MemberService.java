package com.project.shoppingmall.service;

import com.project.shoppingmall.domein.Member;
import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;


    public ResponseEntity<String> join(MemberDto memberDto) {
        duplicateMember(memberDto);
        Member member = memberDto.toEntity();
        String encodePassword = passwordEncoder.encode(member.getPassword());
        member.changePassword(encodePassword);
        memberRepository.save(member);

        return ResponseEntity.status(HttpStatus.CREATED).body("success");
    }


    private void duplicateMember(MemberDto member) {
        Optional<Member> findMember = memberRepository.findByUserid(member.getUserid());
        if (findMember.isPresent()) {
            throw new IllegalStateException("중복된 회원입니다");
        }
    }

    public ResponseEntity<?> login(MemberDto member) {
        Optional<Member> findMembers = memberRepository.findByUserid(member.getUserid());

        if (findMembers.isPresent()) {
            if(passwordEncoder.matches(member.getPassword(), findMembers.get().getPassword())){
                return ResponseEntity.status(HttpStatus.OK).body(findMembers.get().toDto());
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("비밀번호 오류");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 사용자 없음");
        }
    }
}
