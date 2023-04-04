import styled from "styled-components";

export const StyledMain = styled.main`
`

export const StyledSection = styled.section`
    background-color: ${({bg})=>bg};
    
    & h1 {
        color:#F4CE14;
        padding-left: 20px;
        padding-top: 10px;
        padding-buttom: 0;
        border: solid black 1px;
        font-size: 2rem;
        font-family: karla;
        display:none;
    }

    & h2 {
        color: #fff;
        padding-left: 20px;
        padding-top: 0px;
        margin-top: -30px;
        border: solid black 1px;
        font-size: 1.5rem;
        font-family: karla;
        display:none;
    }

    & > button {
        display:none;
    }

    @media (max-width: ${({theme})=>theme.mobile}){
        padding-bottom:5px;

        & > button {
            display:block;
            padding: 8px;
        }

        & h2 {
            color: #fff;
            padding-left: 20px;
            padding-top: 0px;
            margin-top: -30px;
            border: solid black 1px;
            font-size: 1.5rem;
            font-family: karla;
            display:block;
        }
        
        & h1 {
            color:#F4CE14;
            padding-left: 20px;
            padding-top: 10px;
            padding-buttom: 0;
            border: solid black 1px;
            font-size: 2rem;
            font-family: karla;
            display:block;
        }

    }
`

export const Button = styled.button`
    background-color: #F4CE14;
    border: solid #F4CE14 1px;
    border-radius: 16px;
    color: #333333;
    font-size: 100%;
    font-family: karla;
    font-weight: 700;
    padding: 10px;
    align-self: start;

    @media (max-width: ${({theme})=>theme.mobile}){
        margin: 20px;

    }


`

export const HeroFlex =styled.div`
    display:flex;
    flex-direction: column;
    padding: 20px 40px;
    max-width:100%;
    flex-shrink:1;
    border: solid pink 1px;



    & > h2 {
        color:#F4CE14;
        font-family: markazi;
        font-weight: 700;
        margin:0;
        padding:20px 0;
    }

    & > p {
        font-family: karla;
        font-weight: 400;
        color:#FFFFFF;
        margin: 35px 0;
        font-size: 100%;
    }

    & > img {
        border-radius: 16px;
        max-inline-size: 100%;
        block-size: auto;
        width:100%;
        position:absolute;
        
    }

    & > h1 {
        display: block;
        align-self: start;
        padding-left: 0px;
    
    }

    @media (max-width: ${({theme})=>theme.mobile}){
        display: flex;
        padding: 0 10px;
        max-width:100%;
        flex-shrink:1;
        

        

        & > img {
            min-width: 80px;
            position:static;
        }

        & > p {
            font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
            font-family: karla;
            font-weight: 400;
            color:#FFFFFF;
            margin: 35px 0;
        }

        & > button {
            display:none;
        }

        & > h1 {
            display: none;
        }

        

    }
`