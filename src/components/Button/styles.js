import styled from 'styled-components'
export const Container = styled.button`

display: flex;
justify-content: center;
align-items: center;

border-radius: 999px;
border: none;
background: ${({ theme }) => theme.COLORS.blue};

>button{
  color: ${({ theme }) => theme.COLORS.gray02};
  cursor: pointer;
  width: 100%;
  background: transparent;
  border: none;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  text-transform: uppercase;
  padding: 12px 24px;
}
button:hover{
  border-radius: 999px;
  background: var(--blue-light, #212187);
}
`