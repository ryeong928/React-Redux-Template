import { useEffect } from "react";
import Router from "./Router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {FancyBtn, SpiningBtn, DarkBtn} from './styled'

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
const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
  }
`

export default () => {
  useEffect(() => {
    console.log('hi')
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Router />
        <FancyBtn>it's good</FancyBtn>
        <SpiningBtn>으아아</SpiningBtn>
        <DarkBtn>theme btn</DarkBtn>
      </div>
    </ThemeProvider>
  );
}

