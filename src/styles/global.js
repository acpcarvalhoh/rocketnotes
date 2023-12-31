import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-fonts-smoothing: antialiased;

        
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
       filter: brightness(0.9);
    }

    ul{
        list-style-type: none;
    }


     
  ::-webkit-scrollbar {
    width: 10px; 
    
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 6px;
    
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
    
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

`;