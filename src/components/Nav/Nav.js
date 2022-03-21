import React from 'react';
import { Login } from 'pages';
import * as S from './Nav.style';

const Nav = () => {
  return (
    <S.Nav>
      <S.LogoName>🅱 We-Are-Bnb</S.LogoName>
      <S.SearchBox>검색</S.SearchBox>
      <S.LoginBox>
        <S.JoinHost>dd</S.JoinHost>
        <S.SettingLanguae>dd</S.SettingLanguae>
        <Login />
      </S.LoginBox>
    </S.Nav>
  );
};

export default Nav;
