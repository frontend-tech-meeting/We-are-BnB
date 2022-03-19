import React from 'react';
import * as S from './LoginModal.style';

const LoginModal = ({ closeModal }) => {
  const REST_API_KEY = '0e6275f3e1b892977145695b5e10bcdc';
  const REDIRECT_URI = 'http://localhost:3000/oauth';

  const kakaoLogin = () => {
    fetch(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <S.LoginModal>
      <S.CloseButton onClick={() => closeModal}>X</S.CloseButton>
      <S.KakaoButton
        src="/images/kakao_login.png"
        alt="kakao_login_button"
        onClick={kakaoLogin}
      />
    </S.LoginModal>
  );
};

export default LoginModal;
