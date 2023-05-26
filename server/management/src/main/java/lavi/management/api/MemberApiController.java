package lavi.management.api;

import lavi.management.domain.Member;
import lavi.management.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    /**
     * 회원 등록 API
     */
    @PostMapping("/members/join")
    public Long create(@RequestBody Member member) {
        Long memberId = memberService.join(member);
        return memberId;
    }

    /**
     * 전체 회원 조회 API
     */
    @GetMapping("/members/list")
    public List<Member> list() {
        return memberService.findMembers();
    }


}
