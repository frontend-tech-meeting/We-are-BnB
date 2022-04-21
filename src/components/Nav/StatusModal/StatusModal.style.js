import styled from 'styled-components';
import { common } from 'styles';

const { fullArea } = common;

export const StatusBackground = styled.div`
  ${fullArea};
  position: fixed;
  z-index: 2;
  cursor: default;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 80px;
  right: 100px;
  padding: 15px 0;
  width: 200px;
  border-radius: 20px;
  background-color: white;
  color: black;
  overflow: hidden;
`;

export const MenuCategori = styled.button`
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  border: none;
  background-color: white;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;
