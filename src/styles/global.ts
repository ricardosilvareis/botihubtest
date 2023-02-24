import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    
    }

    :focus{
            outline: none;
            box-shadow:0 0 0 2px ${props => props.theme['gray-600']} ;
    }

    body{
        background-color:${props => props.theme['gray-100']} ;
        color:${props => props.theme['gray-900']} ;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 400 1rem Roboto, sans-serif;
    }


`;