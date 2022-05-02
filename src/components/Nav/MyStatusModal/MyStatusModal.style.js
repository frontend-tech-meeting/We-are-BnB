import styled from 'styled-components';
import { common } from 'styles';
import { animation } from 'styles';

const { flex, buttonStyle } = common;
const { spin } = animation;
export const MyStatusWrap = styled.article`
  ${flex};
  position: relative;
  width: 500px;
  font-size: 15px;
`;

export const ModalCloseBtn = styled.button`
  ${buttonStyle('none', 'black')}
  position: absolute;
  left: 0;
`;

export const StatusTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
`;

export const LodingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LodingImg = styled.img`
  width: 20%;
  animation: ${spin} 1s linear infinite;
`;
