import React from 'react';

import { Modal } from 'components/common';
import { Line } from 'components/common';
import kakaoLogin from './KakaoData';

import * as S from './LoginModal.style';

const LoginModal = ({ isOpenModal, closeModal }) => {
  const { KAKAO_URL } = kakaoLogin;

  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <S.LoginWrap>
        <S.ModalCloseBtn onClick={closeModal}>X</S.ModalCloseBtn>
        <S.LoginTitle>로그인 또는 회원가입</S.LoginTitle>
      </S.LoginWrap>
      <Line />
      <S.KakaoLoginWrap>
        <a href={KAKAO_URL}>
          <S.KakaoLoginImg
            src="/images/kakao_login.png"
            alt="kakao_login_button"
          />
        </a>
      </S.KakaoLoginWrap>
    </Modal>
  );
};

export default LoginModal;
