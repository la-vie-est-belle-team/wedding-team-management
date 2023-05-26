import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <div className='sign-up__bg'>
        <div className='sign-up__wrap'>
          <div className='sign-up__header'>
            <img src='./img/logo.png'></img>
            <Link to="/signin"><img className="back-btn" src='./img/ic_cheveron_left.svg'></img></Link>
          </div>
          <form id='signupForm'>
            <div className='sign-up-input'>
              <div className='sign-up-input__wrap'>
                <p className='sign-up-input__title'><span>아이디</span></p>
                <div className='sign-up-input__box'>
                  <input type="text" id="id" name="id" placeholder="영문, 숫자 5-11자"></input>
                  <button type='button' className='sign-up-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
                </div>
              </div>
              <div className='sign-up-input__wrap'>
                <p className='sign-up-input__title'><span>비밀번호</span></p>
                <div className='sign-up-input__box'>
                  <input type="password" id="pw" name="pw" placeholder="숫자, 영문, 특수문자 조합 최소 8자"></input>
                  <div className='sign-up-input-button'>
                    <button type='button' className='sign-up-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
                    <button type='button' className='sign-up-input__button-view' style={{ backgroundImage: 'url(./img/ic_pw_show_btn.svg)' }}></button>
                  </div>
                </div>
              </div>
              <div className='sign-up-input__wrap repeat'>
                <p className='sign-up-input__title hide'>비밀번호 재입력</p>
                <div className='sign-up-input__box'>
                  <input type="password" id="reEnterPw" name="reEnterPw" placeholder="비밀번호 재입력"></input>
                  <div className='sign-up-input-button'>
                    <button type='button' className='sign-up-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
                    <button type='button' className='sign-up-input__button-view' style={{ backgroundImage: 'url(./img/ic_pw_show_btn.svg)' }}></button>
                  </div>
                </div>
              </div>
              <div className='sign-up-input__wrap'>
                <p className='sign-up-input__title'><span>이름</span></p>
                <div className='sign-up-input__box'>
                  <input type="text" id="userName" name="userName" placeholder="이름을 입력해주세요."></input>
                  <div className='sign-up-input-button'>
                    <button type='button' className='sign-up-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
                  </div>
                </div>
              </div>
              <div className='sign-up-input__wrap'>
                <p className='sign-up-input__title'><span>이메일</span></p>
                <div className='sign-up-input__box'>
                  <input type="email" id="userEmail" name="userEmail" placeholder="이메일을 입력해주세요."></input>
                  <div className='sign-up-input-button'>
                    <button type='button' className='sign-up-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
                  </div>
                </div>
                <p className='sign-up-email__info'>계정 분실 시 본인 인증 정보로 활용됩니다.</p>
              </div>
              <div className='sign-up-input__wrap gender'>
                <p className='sign-up-input__title'><span>성별</span></p>
                <div className='sign-up-input-gender__box'>
                  <div className='sign-up-input-gender__item'>
                    <input type="radio" id='mail' name='gender'></input>
                    <label>남자</label>
                  </div>
                  <div className='sign-up-input-gender__item'>
                    <input type="radio" id='femail' name='gender'></input>
                    <label>여자</label>
                  </div>
                </div>
              </div>
              <div className='sign-up-condition__wrap'>
                <div className='sign-up-checkbox__wrap'>
                  <input type='checkbox' id='checkAll' name='checkAll'></input>
                  <label className='sign-up-checkbox-checkAll'>약관 전체 동의하기 (선택동의 포함)</label>
                </div>
                <div className='sign-up-checkbox__wrap'>
                  <input type='checkbox' name='require'></input>
                  <label className='sign-up-checkbox-text'>[필수] 만 16세 이상입니다.</label>
                </div>
                <div className='sign-up-checkbox__wrap'>
                  <input type='checkbox' name='require'></input>
                  <label className='sign-up-checkbox-text'>[필수] 라비에벨 진행팀 이용 약관</label>
                  <Link to="/" className="sign-up__detail">자세히</Link>
                </div>
                <div className='sign-up-checkbox__wrap'>
                  <input type='checkbox' name='require'></input>
                  <label className='sign-up-checkbox-text'>[필수] 개인정보 수집 및 이용 동의</label>
                  <Link to="/" className="sign-up__detail">자세히</Link>
                </div>
                <div className='sign-up-checkbox__wrap'>
                  <input type='checkbox' name='choice'></input>
                  <label className='sign-up-checkbox-text'>[선택] 주말 모두 출근이 가능합니다.</label>
                </div>
              </div>
              <button type='submit' className='sign-up__button'>회원 가입</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}