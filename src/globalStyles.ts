import { createGlobalStyle } from "styled-components";
import { MAINCOLORBG, MAINCOLORFONT } from "./variables";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${MAINCOLORBG};
    color: ${MAINCOLORFONT};
    font-family: 'Roboto Condensed', Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
