import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }
  body {
    ${({theme})=> 
      `
        background-color: ${theme.colors.background};
        color: ${theme.colors.font};
        font-family: ${theme.typography.fontFamily};
      `
    }
  }
`;

export default GlobalStyles;