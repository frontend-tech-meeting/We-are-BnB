import React from 'react';
import * as S from './Modal.style';

const Modal = ({ isOpenModal, closeModal, children }) => {
  return (
    <S.DimmedBackground hidden={!isOpenModal} onClick={closeModal}>
      <S.ModalContainer>
        <S.ModalBox onClick={(e) => e.stopPropagation()}>{children}</S.ModalBox>
      </S.ModalContainer>
    </S.DimmedBackground>
  );
};

export default Modal;
