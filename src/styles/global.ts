import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.4rem;
    }

    ::-webkit-scrollbar-track {
      background: #ebebeb;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #353333;
    }
  }

  [data-reach-dialog-overlay] {
    z-index: 15;
    margin-bottom: 0;
  }

  @media (max-height: 700px) {
    [data-reach-dialog-content] {
      margin-bottom: 0;
    }
  }

  html {
    font-family: "Open Sans", sans-serif;
  }

  body {
    background: #f4f4f8;
    color: #333333;
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
  }

  button {
    font-family: "Open sans", serif;
    cursor: pointer;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
  }

  :root {
    // Vars
    --text-primary: #202020;
    --text-secondary-white: #FFFFFF;
    --text-background-white: #FBFBFB;
    --text-border-card: #CCCCCC;
    --text-primary-gradient: #A11CF3;
    --text-primary-secondary: #D835C5;
}
` 
    
