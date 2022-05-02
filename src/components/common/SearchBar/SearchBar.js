import React from 'react';
import styled from 'styled-components';
import SearchTab from './SearchTab';
import { common } from 'styles';

const { flex } = common;

const SearchBar = () => {
  return (
    <SearchBarWrap>
      <SearchBarContainer>
        {SEARCHBOX_DATA.map((list) => {
          return (
            <SearchTab key={list.id} title={list.title} type={list.type} />
          );
        })}
      </SearchBarContainer>
    </SearchBarWrap>
  );
};

export default SearchBar;

const SearchBarWrap = styled.div`
  ${flex};
`;

const SearchBarContainer = styled.div`
  display: flex;
  margin: 20px 0 80px;
  width: 60%;
  height: 80px;
  background-color: white;
  border-radius: 100px;
`;

const SEARCHBOX_DATA = [
  { id: 1, title: '위치', type: 'input' },
  { id: 2, title: '체크인', type: 'date' },
  { id: 3, title: '체크아웃', type: 'date' },
  { id: 4, title: '인원', type: 'people' },
];
