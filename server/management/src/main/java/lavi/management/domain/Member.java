package lavi.management.domain;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class Member {
    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String ID;
    private String password;
    private String name;
    private String email;
    private String phoneNum;
    @Enumerated
    private Gender gender;
}
