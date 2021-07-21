import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    font-size: 62.5%;
    font-family:'Fugaz One', cursive;
  }

  body{
    font-size: 1.6rem;
  }

  h3{
    font-size: 1.6rem;
  }

  input[type='radio'] {
    visibility: hidden;
    position: absolute;
}





  /* #radio-1:checked ~ .picker__item #card-1,
  #radio-2:checked ~ .picker__item #card-2,
  #radio-3:checked ~ .picker__item #card-3 {
      transform: translateX(0) scale(1);
      opacity: 1;
      z-index: 1;
  }
  #radio-1:checked ~ .picker__item #card-2,
  #radio-2:checked ~ .picker__item #card-3,
  #radio-3:checked ~ .picker__item #card-1 {
      transform: translateX(40%) scale(0.8);
      opacity: 0.5;
      z-index: 0;
  }
  #radio-1:checked ~ .picker__item #card-3,
  #radio-2:checked ~ .picker__item #card-1,
  #radio-3:checked ~ .picker__item #card-2 {
      transform: translateX(-40%) scale(0.8);
      opacity: 0.5;
      z-index: 0;
  } */
`;

export default GlobalStyle;
