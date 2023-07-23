import { createGlobalStyle } from "styled-components";
import bgImage from '../assets/Background.png'
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Outfit', sans-serif;
  background: url(${bgImage});
  color: ${({theme})=>theme.COLORS.gray02};
}
`