import React from 'react';
import { query } from 'utils';
import * as S from './Login.style';

const Login = ({ closeModal }) => {
  const kakaoAuthParmas = {
    client_id: process.env.REACT_APP_KAKAO_KEY,
    redirect_uri: 'http://localhost:3000/kakao-auth',
    response_type: 'code',
  };

  const KAKAO_URL =
    'https://kauth.kakao.com/oauth/authorize?' + query(kakaoAuthParmas);

  const getKakaoToken = () => {
    if (localStorage.getItem('token')) {
      closeModal();
      return;
    } else {
      window.location.href = KAKAO_URL;
    }
  };

  return (
    <S.Login>
      <S.TitleBox>
        <S.CloseButton onClick={closeModal}>✕</S.CloseButton>
        <S.Title> 회원가입 또는 로그인</S.Title>
      </S.TitleBox>
      <S.LoginContents>
        <S.WelcomeText>위어비앤비에 오신 것을 환영합니다🙇‍♀️🙇‍♂️</S.WelcomeText>
        <S.KakaoButton
          src="/images/kakao_login.png"
          alt="kakao_login_button"
          onClick={getKakaoToken}
        />
      </S.LoginContents>
    </S.Login>
  );
};

export default Login;
