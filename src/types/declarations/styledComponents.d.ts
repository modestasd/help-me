import 'styled-components';

export type FontCommon = {
  fontSize: string;
};

declare module 'styled-components' {
  //would be easier to use [key: string]: FontCommon; but then you wont get typing suggestions
  export interface Typography {
    fontFamily: string;
    h1: FontCommon;    
    h2: FontCommon;
    h3: FontCommon;
    h4: FontCommon;
    h5: FontCommon;
     p: FontCommon;
  };

  export interface Colors {
    primary: string;
    secondary: string;
    background: string;
    font: string;
  };

  export interface DefaultTheme {
    typography: Typography;
    colors: Colors;
  }
};