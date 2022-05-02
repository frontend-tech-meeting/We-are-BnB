import React, { useEffect, useRef, useState } from 'react';

import * as S from './Img.style';

const ImgSlide = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newImgArr, setNewImgArr] = useState([]);
  const slideImageBox = useRef();

  const settingArr = [...list];

  const nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
  const prevIndex = currentIndex === 0 ? list.length - 2 : currentIndex - 2;

  useEffect(() => {
    settingArr.push(list[0]);
    settingArr.unshift(list[list.length - 1]);
    setNewImgArr(settingArr);
  }, []);

  useEffect(() => {
    const autoMoveImg = setInterval(() => {
      moveRightSide();
    }, 3000);

    return () => {
      clearInterval(autoMoveImg);
    };
  }, [newImgArr, currentIndex]);

  const moveRightSide = () => {
    let changeArr = [...newImgArr];
    changeArr.shift();
    changeArr.push(list[nextIndex]);
    setNewImgArr(changeArr);
    currentIndex === list.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    slideImageBox.current.style.transform = `translateX(0%)`;
    slideImageBox.current.style.transition = `none`;

    setTimeout(() => {
      slideImageBox.current.style.transform = `translateX(-100%)`;
      slideImageBox.current.style.transition = `0.5s all ease-in-out`;
    }, 10);
  };

  const moveLeftSide = () => {
    let changeArr = [...newImgArr];
    changeArr.pop();
    changeArr.unshift(
      prevIndex === -1 ? list[list.length - 1] : list[prevIndex]
    );
    setNewImgArr(changeArr);
    currentIndex === 0
      ? setCurrentIndex(list.length - 1)
      : setCurrentIndex(currentIndex - 1);
    slideImageBox.current.style.transform = `translateX(-200%)`;
    slideImageBox.current.style.transition = `none`;

    setTimeout(() => {
      slideImageBox.current.style.transform = `translateX(-100%)`;
      slideImageBox.current.style.transition = `0.5s all ease-in-out`;
    }, 10);
  };

  const handleImgSlide = (e) => {
    const { name } = e.target;
    name === 'right' ? moveRightSide() : moveLeftSide();
  };

  return (
    <>
      <S.ImgContainerWrap>
        <S.ArrowBtn
          alt="left_slide_button"
          name="left"
          src="/images/arrow.png"
          onClick={handleImgSlide}
        />
        <S.ImgContainer>
          <S.ImgBox ref={slideImageBox}>
            {newImgArr.map((src, idx) => {
              return <S.SlideImg key={idx} alt={idx} src={src} />;
            })}
          </S.ImgBox>
        </S.ImgContainer>
        <S.ArrowBtn
          alt="right_slide_button"
          name="right"
          src="/images/arrow.png"
          onClick={handleImgSlide}
        />
      </S.ImgContainerWrap>
      <S.DotWrap>
        {list.map((url, index) => {
          return (
            <S.DotBtn key={url} id={index} check={index === currentIndex} />
          );
        })}
      </S.DotWrap>
    </>
  );
};

export default ImgSlide;
