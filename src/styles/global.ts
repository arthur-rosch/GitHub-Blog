import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    :focus{
      outline: none;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
  }
  body{
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme['base-text']};
    background:${(props) => props.theme['base-background']}; ;
  }
   body , input, textarea, button{
      font: 400 1rem Nunito , sans-serif;
   }
`
