import React from 'react';
import styled from 'styled-components';

import Nav from 'components/Nav';

const Main = () => {
  return (
    <MainWrap>
      <Nav />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;
