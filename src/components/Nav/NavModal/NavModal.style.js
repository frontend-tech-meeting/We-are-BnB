import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
`;

export const MenuContentWrapper = styled.ul`
  position: absolute;
  top: 70px;
  right: 25px;
  width: 200px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const MenuContent = styled.li`
  padding: 15px 10px;
  cursor: pointer;

  &:nth-child(2) {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.hoverGrey};
  }

  &:hover {
    background-color: #fafafa;
  }
`;
