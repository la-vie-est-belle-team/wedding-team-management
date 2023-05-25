package lavi.attendance.domain.member;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class Member {

    private Long id;

    @NotNull
    private String loginId; //로그인 ID

    @NotEmpty
    private String password; //비밀번호

    @NotEmpty
    private String name; //사용자 이름

    @NotNull
    private Integer age; //나이

    @NotEmpty
    private String phoneNum; //휴대폰 번호


}
