package com.project.shoppingmall.service;

import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.domain.UserTypes;
import com.project.shoppingmall.dto.MemberDto;
import com.project.shoppingmall.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<String> signup(MemberDto request) {

        Optional<Member> findMember = memberRepository.findByUserid(request.getUserid());

        try {
            if (findMember.isEmpty()) {
                request.setPassword(passwordEncoder.encode(request.getPassword()));
                memberRepository.save(request.toEntity());

                return ResponseEntity.status(HttpStatus.CREATED).body("Signup Success");
            } else {

                return ResponseEntity.status(HttpStatus.CONFLICT).body("Duplicate Userid");
            }
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server error in signup");
        }
    }

    public ResponseEntity<String> login(MemberDto request) {

        Optional<Member> findMember = memberRepository.findByUserid(request.getUserid());

        try {
            if (findMember.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found User");
            }

            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(findMember.get().getUserType().toString()));

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUserid(), request.getPassword(), authorities));

            if (passwordEncoder.matches(request.getPassword(), findMember.get().getPassword())) {

                SecurityContextHolder.getContext().setAuthentication(authentication);
                return ResponseEntity.status(HttpStatus.OK).body("Success Login");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server error in login");
        }
    }

    /**
     * 유저권한을 1개만 사용할 것이므로 주석처리
     */

//    private List<GrantedAuthority> getGrantedAuthorities(Set<UserTypes> authorities) {
//        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
//        for (UserTypes authority : authorities) {
//            grantedAuthorities.add(new SimpleGrantedAuthority(authority.name()));
//        }
//        return grantedAuthorities;
//    }
}













