import styled from 'styled-components';
import { common } from 'styles';
import { animation } from 'styles';

const { flex, fullArea } = common;
const { popUp } = animation;

export const DimmedBackground = styled.div`
  ${fullArea};
  position: fixed;
  z-index: 3;
`;

export const ModalContainer = styled.div`
  ${fullArea};
  ${flex('column', 'center')}
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalBox = styled.div`
  position: relative;
  padding: 20px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  z-index: 4;
  animation: ${popUp} 0.5s;
`;
