import styled from "styled-components"

import { Link } from "react-router-dom";


export const Container = styled.header`
    grid-area: header;
    height: 10.5rem;
    width: 100%;
    border-bottom-width: 1px;  
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};


    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;

`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    >img{
        width: 5.6rem;
        height: 5.6;
        border-radius: 50%
    }

    >div{
        display: flex;
        flex-direction: column;
        line-height: 2.4rem;

        span{
            font-size: 1.4rem;
            color:  ${({ theme }) => theme.COLORS.WHITE};
        }

        strong{
            font-size: 1.8rem;
            color:  ${({ theme }) => theme.COLORS.WHITE};
        }
    }



`

export const Logout = styled.button`
    background: none;
    border: none;
    color:  ${({ theme }) => theme.COLORS.ORANGE};

    >svg{
        height: 2.5rem;
        width: 2.5rem;
    }
    
`


