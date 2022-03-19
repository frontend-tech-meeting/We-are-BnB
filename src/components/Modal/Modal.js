import React, { useRef } from 'react';
import * as S from './Modal.style';

const Modal = ({ children, closeModal }) => {
  const modalRef = useRef();

  return (
    <>
      <S.Background onClick={closeModal} />
      <S.ModalWrapper ref={modalRef}>{children}</S.ModalWrapper>
    </>
  );
};

export default Modal;
