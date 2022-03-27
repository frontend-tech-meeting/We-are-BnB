import React from 'react';
import * as S from './Login.style';

const Login = ({ closeModal }) => {
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=http://localhost:3000/kakao-auth`;

  return (
    <S.Login>
      <S.TitleBox>
        <S.CloseButton>✕</S.CloseButton>
        <S.Title> 회원가입 또는 로그인</S.Title>
      </S.TitleBox>
      <S.LoginContents>
        <S.WelcomeText>위어비앤비에 오신 것을 환영합니다🙇‍♀️🙇‍♂️</S.WelcomeText>
        <a href={KAKAO_URL}>
          <S.KakaoButton
            src="/images/kakao_login.png"
            alt="kakao_login_button"
          />
        </a>
      </S.LoginContents>
    </S.Login>
  );
};

export default Login;
