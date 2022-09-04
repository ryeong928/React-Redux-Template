/*
--styled-components : CSS-in-JS styling solution for React and React Native
automatic critical CSS
no class name bugs
easier deletion of CSS
dynamic styling
painless maintenance
automatic vendor prefixing
*/
import styled, {css, keyframes} from "styled-components";

// attrs(() => {}) 도 가능함
export const FancyBtn = styled.button.attrs({
    disabled: true
})`
    width: 150px;
    height: 50px;
    font-size: 20px;
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
    color: white;
    cursor: ${props => !props.disabled && 'pointer'};
    &:hover{
      background-image: linear-gradient(to right, silver 0%, gray 100%);
    }
`
// keyframes, animation
const spin = keyframes`
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
`
export const SpiningBtn = styled.button`
    width: 100px;
    height: 30px;
    animation: ${spin} infinite 3s linear;
`
// theme 적용
export const DarkBtn = styled.button`
    border: 2px solid ${props => props.theme.dark.primary};
    background-color: ${props => props.theme.dark.primary};
    color: ${props => props.theme.dark.text};
`