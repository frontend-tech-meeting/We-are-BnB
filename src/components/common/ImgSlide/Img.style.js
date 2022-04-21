import styled from 'styled-components';

export const ImgContainerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  transform: translate(-100%);
  transition: 0.5s all ease-in-out;
`;

export const SlideImg = styled.img`
  width: 800px;
  height: 500px;
`;

export const DotWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const DotBtn = styled.div`
  margin: 0 10px;
  width: 10px;
  height: 10px;
  border: 0.5px solid white;
  border-radius: 50%;
  background-color: ${(props) => (props.check ? 'pink' : 'black')};
`;
