import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 196px 0px rgba(112, 0, 255, 0.70);
  }
  div:nth-child(2) img{
    width: 230px;
    height: 230px;
  }

`