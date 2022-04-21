import styled from 'styled-components';
import { common } from 'styles';

const { alignCenter, buttonStyle } = common;

export const NavWrap = styled.nav`
  ${alignCenter};
  justify-content: space-between;
  padding: 20px 100px;
  background-color: black;
`;

export const LogoContainer = styled.button`
  ${buttonStyle('none')};
  ${alignCenter};
`;

export const Logo = styled.span`
  font-size: 50px;
  font-family: 'Fredoka Bold';
  color: ${({ theme }) => theme.colors.brand};
`;

export const TitleName = styled.span`
  margin-left: 20px;
  font-size: 20px;
`;

export const UserStatusContainer = styled.div`
  ${alignCenter};
  position: relative;
  color: white;
`;

export const HostBtn = styled.button`
  ${buttonStyle('none')};
  margin-right: 20px;
  font-size: 15px;
`;

export const MyStatusBtn = styled.div`
  padding: 5px;
  border-radius: 30%;
  background-color: white;
  cursor: pointer;
`;

export const StatusImg = styled.img`
  width: 25px;
`;
