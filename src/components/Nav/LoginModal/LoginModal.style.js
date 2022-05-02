import styled from 'styled-components';
import { common } from 'styles';

const { flex, buttonStyle } = common;

export const LoginWrap = styled.article`
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

export const LoginTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
`;

export const KakaoLoginWrap = styled.div`
  ${flex};
`;

export const KakaoLoginImg = styled.img`
  cursor: pointer;
`;
