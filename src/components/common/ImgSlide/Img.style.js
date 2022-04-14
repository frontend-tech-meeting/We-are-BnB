import styled from 'styled-components';

export const ImgContainerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ArrowBtn = styled.img`
  width: 40px;
  transform: ${(props) =>
    props.name === 'left' ? 'rotate(0)' : 'rotate(180deg)'};
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  width: 800px;
  height: 500px;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
`;

export const SlideImg = styled.img`
  width: 800px;
  height: 500px;
`;
