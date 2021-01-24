import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto Condensed', sans-serif;
    }
`