import React, { useState } from 'react';
import * as S from './SearchTab.style';

const SearchTab = ({ title, type }) => {
  const [isOpenHiddenText, setIsOpenHiddenText] = useState(false);

  return (
    <S.SearchBox>
      <S.SearchTitle>{title}</S.SearchTitle>
      {SUBTEXT_DATA[type]}
      {type === 'people' && (
        <S.SearchIconWrap
          onClick={() => {
            setIsOpenHiddenText(!isOpenHiddenText);
          }}
        >
          <S.SearchIcon alt="search_icon" src="./images/search.png" />
          <S.IconHiddenText hidden={!isOpenHiddenText}>검색</S.IconHiddenText>
        </S.SearchIconWrap>
      )}
    </S.SearchBox>
  );
};

export default SearchTab;

const SUBTEXT_DATA = {
  input: <S.SearchInput placeholder="어디로 여행가세요?" />,
  date: <S.SearchSubText>날짜 입력</S.SearchSubText>,
  people: <S.SearchSubText>게스트 추가</S.SearchSubText>,
};
