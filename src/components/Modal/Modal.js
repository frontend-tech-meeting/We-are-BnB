import React, { useRef } from 'react';
import * as S from './Modal.style';

const Modal = ({ closeModal, children }) => {
  const modalRef = useRef();

  const modalClose = (e) => {
    if (!modalRef.current.contains(e.target)) {
      console.log(!modalRef.current.contains(e.target));
      closeModal();
    }
  };

  return (
    <S.Background onClick={modalClose}>
      <S.ModalWrapper ref={modalRef}>{children}</S.ModalWrapper>
    </S.Background>
  );
};

export default Modal;
