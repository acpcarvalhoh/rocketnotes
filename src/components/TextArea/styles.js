import { styled } from "styled-components";


export const Container = styled.textarea`
  background: red;

  width: 100%;
  height: 14.5rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  margin-bottom: 8px;
  border-radius: 1rem;
  padding: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GREY_300};
  }

  

  


`