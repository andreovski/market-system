import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* RESET DA APLICAÇÃO */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 1rem;
  }

  html, border-style, #root {
    height: 100vh;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  /* CORES PADRÕES */
  :root {
    --primary: #23A2CD;
    --background-default: #EEEEEE;
    --light_grey: #999999;
    --dark_grey: #545454;
    --black: #1B1B1B;
    --elem_white: #FAFAFA;
    --elem_input_selected: #EEEEEE;
    --elem_disable: #E0E0E0;
    --elem_green: #1CCA6A;
    --elem_yellow: #FDBC46;
    --elem_red: #E34142;
    --elem_blue: #5BC6EA;
    --elem_blue-ii: #3FB3DB;
    --tag_yellow: #FFC04C;
    --tag_blue: #4EB4FD;
    --red-red: #EB8283;
    --red-red-ii: #F3C3C3
  }
`;
