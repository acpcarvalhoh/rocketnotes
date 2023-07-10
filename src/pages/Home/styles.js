import { styled } from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 70px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";
  
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom-width: 1px;  
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};


  >h1{
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 2.4rem;
    font-weight: 700;
  }
  
`

export const Menu = styled.ul`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > li:first-child{
    margin-top: 6.4rem;
  }
  
`

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
  
  
  
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;


`

export const NewNote = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background: red;
  background: ${({ theme }) => theme.COLORS.ORANGE};
 
  
`


