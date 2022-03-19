import styled from 'styled-components';
import { Menu } from '@styled-icons/entypo/Menu';
import { AccountCircle } from '@styled-icons/material/AccountCircle';

export const Login = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  width: 90px;
  border: 1px solid ${({ theme }) => theme.colors.rightGrey};
  border-radius: 25px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const MenuButton = styled(Menu)`
  width: 30px;
  padding: 10px 5px;
  color: ${({ theme }) => theme.colors.deepGrey};
`;

export const AccountButton = styled(AccountCircle)`
  position: relative;
  width: 35px;
  margin-left: 2px;
  color: ${({ theme }) => theme.colors.middleGrey};
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  /* position: absolute;
  top: 50px; */
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 10000;
`;
