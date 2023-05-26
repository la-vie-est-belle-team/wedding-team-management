package lavi.management.api;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lavi.management.domain.Member;
import lavi.management.service.LoginService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginApiController {

    private final LoginService loginService;
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid loginMemberDTO memberDTO) {

        Member loginMember = loginService.login(memberDTO.getLoginId(), memberDTO.getPassword());
        if (loginMember == null) {
            throw new IllegalArgumentException("ID 또는 비밀번호가 잘못되었습니다.");
        }
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    @Data
    static class loginMemberDTO {

        @NotEmpty
        private String loginId;

        @NotEmpty
        private String password;
    }
}
