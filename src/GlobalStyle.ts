import "modern-normalize";
import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  width: 1920px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export const SheetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

interface StyledComponentProps {
    width?: number;
    height?: number;
}

export const Sheet = styled.div<StyledComponentProps>`
    outline: 1px solid black;
    width: ${(props) => props.width ?? 0}px;
    height: ${(props) => props.height ?? 0}px;
    margin: 0 auto 20px;
`;

export const Block = styled.div<StyledComponentProps>`
    display: inline-block;
    width: ${(props) => props.width ?? 0}px;
    height: ${(props) => props.height ?? 0}px;
`;
