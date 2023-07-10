import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: auto;
    padding: 1.4rem 1rem;
  }
  
`


export const Form= styled.form`
  max-width: 550px;
  margin: 3.8rem auto;
  display: flex;
  flex-direction: column;
  

  >header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.6rem;

    h1{
      font-size: 3.6rem;
      font-weight: 500;
    }

    a{
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    
  }

  .tags{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  } 
  
`





