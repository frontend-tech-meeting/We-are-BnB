import styled from 'styled-components';
import { Language } from '@styled-icons/material-outlined/Language';
import { Menu } from '@styled-icons/entypo/Menu';
import { AccountCircle } from '@styled-icons/material/AccountCircle';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  ${({ theme }) => theme.style.flex('row', 'space-between', 'center')}
  width: 100vw;
  min-width: 1000px;
  height: 70px;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 10000;
`;

export const LogoName = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  text-decoration: none;
`;

export const SearchBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const LoginBox = styled.div`
  ${({ theme }) => theme.style.flex('row', 'center', 'center')}
`;

export const JoinHost = styled.div`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const SettingLanguae = styled(Language)`
  width: 20px;
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Mypage = styled.div`
  position: relative;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.rightGrey};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const MenuButton = styled(Menu)`
  width: 30px;
  padding: 10px 5px;
  color: ${({ theme }) => theme.colors.deepGrey};
`;

export const AccountButton = styled(AccountCircle)`
  width: 35px;
  margin-left: 2px;
  color: ${({ theme }) => theme.colors.middleGrey};
`;
