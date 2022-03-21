import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-width: 1000px;
  height: 70px;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const LogoName = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
`;

export const SearchBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const LoginBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JoinHost = styled.li`
  color: ${({ theme }) => theme.colors.white};
`;

export const SettingLanguae = styled.li`
  color: ${({ theme }) => theme.colors.white};
`;

export const Mypage = styled.li`
  color: white;
`;
