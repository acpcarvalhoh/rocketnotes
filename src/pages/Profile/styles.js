import { styled } from "styled-components"


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  

  >header{
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    button{
      background: none;
      border: none;

      svg{
        color:  ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.4rem;
      }
      
    }
    
  }

`

export const Form = styled.form`
  max-width: 340px;
  margin: 2rem auto 0;

  div:nth-child(3){
    margin-bottom: 2rem;
  }


`


export const Avatar = styled.div`
  position: relative;
  
  width: 186px;
  height: 186px;
  margin: -10.5rem auto 3.2rem;
  
  
  >img{
    object-fit: contain;
    width: 100%;
    border-radius: 50%
  }

  >label{
    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input{
      display: none;
    }

    svg{
      height: 2rem;
      width: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }

`





