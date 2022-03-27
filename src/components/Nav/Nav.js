import React, { useState } from 'react';
import NavModal from './NavModal/NavModal';
import * as S from './Nav.style';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeNavModal = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <S.Nav>
      <S.LogoName>🅱 WAB</S.LogoName>
      <S.SearchBox>검색</S.SearchBox>
      <S.LoginBox>
        <S.JoinHost>호스트 되기</S.JoinHost>
        <S.SettingLanguae />
        <S.Mypage onClick={() => setOpenMenu(true)}>
          <S.MenuButton />
          <S.AccountButton />
        </S.Mypage>
        {openMenu && <NavModal closeNavModal={closeNavModal} />}
      </S.LoginBox>
    </S.Nav>
  );
};

export default Nav;
