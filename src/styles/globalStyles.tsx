import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }
    
    body {
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    
    #root {
        width: 40%;
        max-width: 80%;
    }
    
    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 68px;
    }
    
    .divider {
        width: 100%;
        height: 1px;
        background-color: #E9E9E9;
        border-width: 0;
    }
`;
