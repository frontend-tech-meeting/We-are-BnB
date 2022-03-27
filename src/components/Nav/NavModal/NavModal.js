import React, { useState, useRef } from 'react';
import { Modal } from 'components';
import { Login } from 'pages';

import * as S from './NavModal.style';

const NavModal = ({ closeNavModal }) => {
  const [currentId, setCurrentId] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const navModalRef = useRef();

  const modalClose = (e) => {
    if (!navModalRef.current.contains(e.target)) {
      closeNavModal();
    }
  };

  const closeModal = (e) => {
    setOpenModal(false);
  };

  const handleClick = (id) => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const MENU_LIST_OBJ = {
    1: <Login content={closeModal} />,
    2: <Login content={closeModal} />,
  };

  return (
    <S.Background onClick={modalClose}>
      <S.MenuContentWrapper ref={navModalRef}>
        {MENU_LIST.map((list, index) => (
          <S.MenuContent key={index} onClick={() => handleClick(index + 1)}>
            {list}
          </S.MenuContent>
        ))}
      </S.MenuContentWrapper>
      {openModal && (
        <Modal closeModal={closeModal}>{MENU_LIST_OBJ[currentId]}</Modal>
      )}
    </S.Background>
  );
};

export default NavModal;

const MENU_LIST = ['회원가입', '로그인', '호스트되기'];
