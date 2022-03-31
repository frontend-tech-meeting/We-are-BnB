import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavModal from './NavModal/NavModal';
import { Modal } from 'components';
import { Login } from 'pages';
import * as S from './Nav.style';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const closeNavModal = () => {
    setOpenMenu(false);
  };

  const closeModal = (e) => {
    setOpenModal(false);
  };

  const selectMenu = (id) => {
    setCurrentId(id);
    setOpenModal(true);
    setOpenMenu(false);
  };

  const MENU_LIST_OBJ = {
    1: <Login closeModal={closeModal} />,
    2: <Login closeModal={closeModal} />,
  };

  return (
    <S.Nav>
      <Link to="/">
        <S.LogoName>🅱 WAB</S.LogoName>
      </Link>

      <S.SearchBox>검색</S.SearchBox>
      <S.LoginBox>
        <S.JoinHost>호스트 되기</S.JoinHost>
        <S.SettingLanguae />
        <S.Mypage onClick={() => setOpenMenu(true)}>
          <S.MenuButton />
          <S.AccountButton />
        </S.Mypage>
        {openMenu && (
          <NavModal
            closeNavModal={closeNavModal}
            closeModal={closeModal}
            selectMenu={selectMenu}
          />
        )}
      </S.LoginBox>
      {openModal && (
        <Modal closeModal={closeModal}>{MENU_LIST_OBJ[currentId]}</Modal>
      )}
    </S.Nav>
  );
};

export default Nav;
