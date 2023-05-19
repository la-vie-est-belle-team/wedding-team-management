package lavi.attendance.web.member;

import jakarta.validation.Valid;
import lavi.attendance.domain.member.Member;
import lavi.attendance.domain.member.MemberRepository;
import lavi.attendance.domain.member.MemoryMemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@Slf4j
public class MemberController {

    /**
     * 현재 MemoryMemberRepository 저장 상태
     * 추후에 DBMemberRepository 로 수정 예정
     * */
    private final MemberRepository memberRepository = new MemoryMemberRepository();

    /**
     * 회원가입 성공시
     * memberRepository 저장 & body에 success 넣어서 response 전송
     *
     * 회원가입 실패시
     * response body에 fail 넣어서 전송
     * */
    @ResponseBody
    @PostMapping("/members/join")
    public String joinMember(@Validated @RequestBody Member member, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            log.info("errors={}", bindingResult);
            return "fail";
        }

        Member savedMember = memberRepository.save(member);
        log.info("savedMember = {}", savedMember);
        return "success";
    }
}
