import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";
import "@fontsource/eczar";

const GlobalStyles = createGlobalStyle`

    /* *{
        outline: 1px solid red !important;
    } */

    *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway','Eczar',-apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
export default GlobalStyles;
