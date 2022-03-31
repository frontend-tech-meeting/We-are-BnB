import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box
  }

  body{
    font-family: 'Fredoka Regular'
  }

  a{
    text-decoration-line:none;
  }
`;

export default GlobalStyle;
