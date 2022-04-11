import React, { useState, useEffect } from 'react';
import * as S from './Slide.style';

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== SLIDE_LIST.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SLIDE_LIST.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(SLIDE_LIST.length);
    }
  };

  const slideTranslate = (slideIndex - 1) * 500;

  const slideDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <S.SlideWrap>
      <S.ArrowPrevButton onClick={prevSlide}>◀</S.ArrowPrevButton>
      <S.SlideBox>
        {SLIDE_LIST.map(({ id, src, alt }) => (
          <S.SlideImage
            key={id}
            src={src}
            alt={alt}
            translate={slideTranslate}
          />
        ))}
      </S.SlideBox>
      <S.SlideDotButtonBox>
        {Array.from({ length: 3 }).map((el, index) => (
          <S.SlideDotButton
            key={index}
            onClick={() => slideDot(index + 1)}
            background={slideIndex === index + 1 ? 'white' : 'grey'}
          />
        ))}
      </S.SlideDotButtonBox>
      <S.ArrowNextButton onClick={nextSlide}>▶︎</S.ArrowNextButton>
    </S.SlideWrap>
  );
};

export default Slide;

const SLIDE_LIST = [
  { id: 0, src: '/images/slide/hotel_carousel_3.jpg', alt: 'slide3' },
  { id: 1, src: '/images/slide/hotel_carousel_1.jpg', alt: 'slide1' },
  { id: 2, src: '/images/slide/hotel_carousel_2.jpg', alt: 'slide2' },
  { id: 3, src: '/images/slide/hotel_carousel_3.jpg', alt: 'slide3' },
  { id: 4, src: '/images/slide/hotel_carousel_1.jpg', alt: 'slide1' },
];
