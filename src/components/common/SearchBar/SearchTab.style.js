import styled from 'styled-components';
import { common } from 'styles';

const { flex } = common;

export const SearchBox = styled.div`
  ${flex('column', 'center', 'flex-start')};
  flex: 2;
  position: relative;
  padding-left: 40px;
  border-radius: 100px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverGray};
    cursor: pointer;
  }
`;

export const SearchTitle = styled.span`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: inherit;
  outline: none;

  &::placeholder {
    font-size: 15px;
  }
`;

export const SearchSubText = styled.span`
  font-size: 15px;
  color: #717171;
`;

export const SearchIconWrap = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  padding: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.brand};
  line-height: 1.5;
  cursor: pointer;
`;

export const SearchIcon = styled.img``;

export const IconHiddenText = styled.span`
  margin-left: 10px;
  font-size: 17px;
  color: white;
`;
