import styled from 'styled-components';

export const Login = styled.div`
  width: 460px;
`;

export const TitleBox = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.hoverGrey};
`;

export const CloseButton = styled.p`
  flex: 1;
  cursor: pointer;
`;

export const Title = styled.h1`
  flex: 9;
  text-align: center;
`;

export const LoginContents = styled.div`
  ${({ theme }) => theme.style.flex('column', 'center', 'center')}
  padding: 20px;
`;

export const WelcomeText = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const KakaoButton = styled.img``;
