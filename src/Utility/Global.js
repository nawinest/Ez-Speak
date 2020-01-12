import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
    font-family: 'Kanit', sans-serif;
  }
  html {
  }
  body {
    box-sizing: border-box;
    
  }

  .slick-list: focus {
    outline: none;
  }

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus {
  outline: none;
}
`;

export default GlobalStyles;