import React, { useState } from 'react';

import StatusModal from './StatusModal';
import LoginModal from './LoginModal';
import MyStatusModal from './MyStatusModal';

import * as S from './Nav.style';

const Nav = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const checkLogin = sessionStorage.getItem('TOKEN');

  const handleStatusModal = () => {
    setIsOpenStatus(!isOpenStatus);
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <S.NavWrap>
      <S.LogoContainer>
        <S.Logo>B</S.Logo>
        <S.TitleName>We are BnB</S.TitleName>
      </S.LogoContainer>
      <S.UserStatusContainer>
        <S.HostBtn>호스트되기</S.HostBtn>
        <S.MyStatusBtn onClick={handleStatusModal}>
          <S.StatusImg src="/images/user.png" />
          <StatusModal
            isOpenStatus={isOpenStatus}
            handleStatusModal={handleStatusModal}
            handleModal={handleModal}
            checkLogin={checkLogin}
          />
        </S.MyStatusBtn>
      </S.UserStatusContainer>
      {checkLogin ? (
        <MyStatusModal isOpenModal={isOpenModal} closeModal={handleModal} />
      ) : (
        <LoginModal isOpenModal={isOpenModal} closeModal={handleModal} />
      )}
    </S.NavWrap>
  );
};

export default Nav;
