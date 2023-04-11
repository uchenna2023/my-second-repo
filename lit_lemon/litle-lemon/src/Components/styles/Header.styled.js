import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color: ${({theme})=>theme.colors.header};
    width: 100%;

`

export const Logo = styled.img`
`


export const UList = styled.ul`
    list-style: none;
    display:flex;
    gap: 20px;


    @media (max-width: ${({theme})=>theme.mobile}) {
        display: none;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;

    @media (max-width: ${({theme})=>theme.mobile}) {
        
    }
`

export const Hamburger = styled.img`
    display: none;
    @media (max-width: ${({theme})=>theme.mobile}) {
        display:block
    }
`
