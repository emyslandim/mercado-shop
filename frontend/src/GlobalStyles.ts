import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary:  #ed145b;
    --white: #EEEEEE;
    --gray: #CCC;
    --bgPrimary: #00000099;
    --overlayLight: #00000033;
    --whiteTransparent: #FFFC;
    --black: #111;
    --alertErro: #AA0000EE;
    --alertSucesso: #00AA00DD;
    --bola: calc(100vw / 13);
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  body {
    font-family: Montserrat;

    background-color: var(--bgPrimary);
    color: var(--white);

    overflow-x: hidden;
  }

  input, button {
            font-size: 14px;
            border-radius: 10px;
            border: none;
            padding: 20px;
        }
 
        input {
            background-color: #d4e8ff;
            color: #06224a;
            width: 100%;
            height: 30px;
        }
 
        input:focus {
            outline: none;
        }
 
        button {
            background-color: #06224a;
            color: white;
            text-transform: uppercase;
            transition: 0.3s;
            line-height: 2px;
            cursor: pointer;
        }
 
        button:hover {
            background-color: #010d1f;
            transition: 0.3s;
        }
`;
