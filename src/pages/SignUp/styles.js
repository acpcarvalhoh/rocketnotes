import { styled } from "styled-components"
import BackgroundImg from "./../../assets/background.png"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

`

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2{
    font-size: 2.4rem;
    margin-top: 8.4rem;
    margin-bottom: 2.4rem;
    
  }

  > p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GREY_100};
  }

  >a{
    font-size: 1.4;
    margin-top: 8.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
 

`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;

`



