package lavi.management.domain;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class Member {
    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String loginId;
    private String password;
    private String name;
    Integer age;
    private String email;
    private String phoneNum;
    @Enumerated
    private Gender gender;
}
