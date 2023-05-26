package lavi.management.service;

import lavi.management.domain.Member;
import lavi.management.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    /**
     * 회원 가입
     * */
    @Transactional
    public Long join(Member member) {
        Member saveMember = memberRepository.save(member);
        return saveMember.getId();
    }

    /**
     * 전체 회원 조회
     * */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    /**
     * 특정 회원 조회(key 이용)
     * */
    public Member findOne(Long memberId) {
        return memberRepository.getReferenceById(memberId);
    }
}
