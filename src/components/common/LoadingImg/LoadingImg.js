import React from 'react';
import styled from 'styled-components';

import { animation } from 'styles';
const { spin } = animation;

const LoadingImg = () => {
  return (
    <LoadingBar>
      <SpinImg src="/images/loding.png" alt="loading" />
    </LoadingBar>
  );
};

export default LoadingImg;

const LoadingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinImg = styled.img`
  width: 20%;
  animation: ${spin} 1s linear infinite;
`;
