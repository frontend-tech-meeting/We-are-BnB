import React from 'react';

import { Modal } from 'components/common';
import { Line } from 'components/common';

import * as S from './MyStatusModal.style';

const MyStatusModal = ({ isOpenModal, closeModal }) => {
  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <S.MyStatusWrap>
        <S.ModalCloseBtn onClick={closeModal}>X</S.ModalCloseBtn>
        <S.StatusTitle>김명성님 환영합니다</S.StatusTitle>
      </S.MyStatusWrap>
      <Line />
    </Modal>
  );
};

export default MyStatusModal;
