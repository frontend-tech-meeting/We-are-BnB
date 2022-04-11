import styled from 'styled-components';

export const SlideWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SlideBox = styled.div`
  display: flex;
  width: 500px;
  overflow: hidden;
`;

export const SlideImage = styled.img`
  position: relative;
  width: 100%;
  transform: translateX(-${(props) => props.translate}px);
`;

export const SlideDotButtonBox = styled.div`
  position: absolute;
  top: 40%;
`;

export const SlideDotButton = styled.button`
  padding: 7px;
  margin: 5px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.background};
`;

export const ArrowPrevButton = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
`;

export const ArrowNextButton = styled(ArrowPrevButton)``;
