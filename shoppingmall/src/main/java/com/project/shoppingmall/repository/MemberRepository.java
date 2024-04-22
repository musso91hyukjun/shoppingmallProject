package com.project.shoppingmall.repository;

import com.project.shoppingmall.domein.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByUserid(String userid);
}
