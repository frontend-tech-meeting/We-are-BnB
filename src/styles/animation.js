import { keyframes } from 'styled-components';

const popUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const animation = { popUp, spin };

export default animation;
