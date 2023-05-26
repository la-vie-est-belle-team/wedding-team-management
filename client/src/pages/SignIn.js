import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="login__bg">
      <div className='login__wrap'>
        <h2 className="h2">로그인</h2>
        <form id="loginForm">
          <div className="login-input">
            <div className='login-input__wrap'>
              <label className='hide'>아이디</label>
              <input type="text" id="id" name="id" placeholder="아이디"></input>
              <div className='login-input-button'>
                <button type='button' className='login-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
              </div>
            </div>
            <div className='login-input__wrap'>
              <label className='hide'>Password</label>
              <input type="password" id="pw" name="pw" placeholder="비밀번호"></input>
              <div className='login-input-button'>
                <button type='button' className='login-input__button-clear' style={{ backgroundImage: 'url(./img/ic_x.svg)' }}></button>
                <button type='button' className='login-input__button-view' style={{ backgroundImage: 'url(./img/ic_pw_show_btn.svg)' }}></button>
              </div>
            </div>
          </div>
          <div className='login-btn'>
            <button type='submit'>로그인</button>
          </div>
        </form>
        <div className='login-member__util'>
          <div class='login-member__util__login-auto'>
            <input type='checkbox' id="autoLogin" name='autoLogin'></input>
            <label for='autoLogin'>자동 로그인</label>
          </div>
          <ul className='login-member__util__list'>
            <li className='login-member__util__item'>아이디 찾기</li>
            <li className='login-member__util__item'>비밀번호 찾기</li>
          </ul>
        </div>
        <div className='sign-up'>
          <p>아직 회원이 아니신가요?</p>
          <Link to="/signup"><button>회원가입</button></Link>
        </div>
      </div>
    </div>
  );
}

