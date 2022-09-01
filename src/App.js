import { useEffect } from "react";
import Router from "./Router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";

// styled의 props로 전달되는 객체
const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  },
  fontFamily: 'Segoe UI',
}
// 전역으로 적용되는 스타일
const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
  }
`

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </ThemeProvider>
  );
}

