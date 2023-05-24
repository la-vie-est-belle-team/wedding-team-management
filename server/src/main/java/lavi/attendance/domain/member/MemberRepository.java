package lavi.attendance.domain.member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {

    Member save(Member member); //회원 정보 저장

    Member findById(Long id); //id 이용해서 Member 정보 찾기

    Optional<Member> findByLoginId(String loginId); //loginId 입력시 Member객체 or null 반환

    List<Member> findAll(); //모든 멤버 객체 list로 반환

    void clearStore();

}
