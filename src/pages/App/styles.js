import styled from 'styled-components'

export const Container = styled.div`
margin: 100px auto;
display: flex;
align-items: center;
justify-content: center;
gap: 210px;
padding: 140px;
background-image: url={bgImage};

.textos{
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 385px;
  text-align: start;
}
.textos h1{
  color: var(--gray-01, #D6D6F2);
font-family: Outfit;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 48px */
}
.textos p{
  color: var(--gray-01, #D6D6F2);
font-family: Outfit;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 140%; /* 28px */
}

.wrapper-buttons{
  width: 350px;
  display: flex;
  gap: 16px;
  margin-top: 26px;
}
`