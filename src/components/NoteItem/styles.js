import { styled } from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, isNew}) => isNew? "transparente" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme}) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew}) => isNew? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  margin-bottom: 8px;
  border-radius: 1rem;
  padding-right: 1.6rem;
  

  > button{
    border: none;
    background: none;

    svg{
      color: ${({ theme, isNew}) => isNew? theme.COLORS.ORANGE : "red"};
    }
  }

  > input{
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem; 
    border: none;

    color: ${({ theme}) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder{
      color: ${({ theme}) => theme.COLORS.GRAY_300};
    }
  }


`