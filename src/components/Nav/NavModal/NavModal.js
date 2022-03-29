import React, { useRef } from 'react';

import * as S from './NavModal.style';

const NavModal = ({ closeNavModal, selectMenu }) => {
  const navModalRef = useRef();

  const modalClose = (e) => {
    if (!navModalRef.current.contains(e.target)) {
      closeNavModal();
    }
  };

  return (
    <S.Background onClick={modalClose}>
      <S.MenuContentWrapper ref={navModalRef}>
        {MENU_LIST.map(({ id, title }) => (
          <S.MenuContent key={id} onClick={() => selectMenu(id)}>
            {title}
          </S.MenuContent>
        ))}
      </S.MenuContentWrapper>
    </S.Background>
  );
};

export default NavModal;

const MENU_LIST = [
  { id: 1, title: '회원가입' },
  { id: 2, title: '로그인' },
  { id: 3, title: '호스트되기' },
];
