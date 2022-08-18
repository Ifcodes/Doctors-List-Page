import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,body{
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif,
  }

  *{
    box-sizing: border-box;
  }

   ::-webkit-scrollbar {
    width: 12px;
    border-radius: 24px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 24px;
    margin-bottom: 2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 24px;
  }
`;

export default GlobalStyles;
