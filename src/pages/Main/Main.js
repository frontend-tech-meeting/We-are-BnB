import React from 'react';
import styled from 'styled-components';

import ImgSlide from 'components/common/ImgSlide';

const Main = () => {
  return (
    <MainWrap>
      <SlideArticle>
        <ImgSlide list={IMAGE_DATA} />
      </SlideArticle>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

const SlideArticle = styled.article``;

const IMAGE_DATA = [
  '/images/slideImg/1.png',
  '/images/slideImg/2.png',
  '/images/slideImg/3.png',
  '/images/slideImg/4.png',
  '/images/slideImg/5.png',
];
