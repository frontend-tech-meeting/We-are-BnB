import React from 'react';
import * as S from './LoginModal.style';

const LoginModal = ({ closeModal }) => {
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  return (
    <S.LoginModal>
      <S.CloseButton onClick={closeModal}>X</S.CloseButton>
      <a href={KAKAO_URL}>
        <S.KakaoButton src="/images/kakao_login.png" alt="kakao_login_button" />
      </a>
    </S.LoginModal>
  );
};

export default LoginModal;
