import React from 'react';
import styled from 'styled-components';

const Line = () => {
  return <LineBorder />;
};

export default Line;

const LineBorder = styled.div`
  margin: 20px 0;
  border: 0.5px solid #eeeeee;
`;
