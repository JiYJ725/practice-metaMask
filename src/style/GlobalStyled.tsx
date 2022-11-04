import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
  }
`;

export default GlobalStyled;
