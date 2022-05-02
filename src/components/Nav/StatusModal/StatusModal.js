import React from 'react';
import * as S from './StatusModal.style';

const StatusModal = ({
  isOpenStatus,
  handleStatusModal,
  handleModal,
  checkLogin,
}) => {
  return (
    <S.StatusBackground
      name="status"
      hidden={!isOpenStatus}
      onClick={handleStatusModal}
    >
      <S.ModalWrap>
        {checkLogin ? (
          <S.MenuCategori onClick={handleModal}>내 상태</S.MenuCategori>
        ) : (
          <S.MenuCategori onClick={handleModal}>로그인</S.MenuCategori>
        )}
      </S.ModalWrap>
    </S.StatusBackground>
  );
};

export default StatusModal;
