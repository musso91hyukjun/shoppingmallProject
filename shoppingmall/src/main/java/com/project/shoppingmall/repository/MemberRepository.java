package com.project.shoppingmall.repository;


import com.project.shoppingmall.domein.Member;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;

    // 회원 가입
    public void save(Member member) {
        em.persist(member);
    }

    // 회원 조회
    public Member findOne(Long id) {
        return em.find(Member.class, id);
    }

    public List<Member> findAll() {

        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    public List<Member> findByUserid(String userid) {

        return em.createQuery("select m from Member m where m.userid = :userid", Member.class)
                .setParameter("userid", userid)
                .getResultList();
    }


}
