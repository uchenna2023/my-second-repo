import styled from "styled-components";

export const StyledMain = styled.main`
`

export const StyledSection = styled.section`
    background-color: ${({bg})=>bg};
    height: 300px;
    
    & h1 {
        color:#F4CE14;
        padding-left: 20px;
        padding-top: 10px;
        padding-buttom: 0;
        font-size: 2rem;
        font-family: karla;
        display:none;
    }

    & h2 {
        color: #fff;
        padding-left: 20px;
        padding-top: 0px;
        margin-top: -30px;
        font-size: 1.5rem;
        font-family: karla;
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
            padding-left: 40px;
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
    padding: 10px 60px;
    align-self: start;

    @media (max-width: ${({theme})=>theme.mobile}){
        margin-left: 40px;

    }


`

export const HeroFlex =styled.div`
    display:flex;
    flex-direction: column;
    padding: 20px 40px;
    max-width:100%;
    flex-shrink:1;



    

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

export const StyledProduct = styled.section`
    background-color: ${({bg})=>bg};
    
    & h3 {
        padding-left: 20px;
    }
`

export const FlexProduct = styled.div`
    display:none;

    @media (max-width: ${({theme})=>theme.mobile}){
        display: ${(fd)=> fd};
        justify-content: space-evenly;

        &  div {
        padding: 10px;
        border-radius: 16px;
        background-color: #D9D9D9;
        margin: 10px;


        }
    }
`



export const HFlex = styled.div`
    display:none;

   




    @media (max-width: ${({theme})=>theme.mobile}){
        display:flex;
        flex-direction: row;
        padding: 0px;
        align-items: center;
        justify-content: center;
        padding: 20px 0;

        & > div {
            flex:1;
            padding:0px 20px;
        }


    }
    

`

export const OnlineFlex = styled.div`
    display: flex;
    margin-top:${({mg})=>mg};
    justify-content: space-around;
    align-items: center;
    border: solid black 2px;

    & > h3,
    & > button {
        
    }

    @media (max-width: ${({theme})=>theme.mobile}){
        display:none;

    }
`

export const OnlineHFlex = styled.div`
    display:flex;
    padding: 10px 40px;

    & > div {
        margin: 20px;
    }
`

export const OnlineVFlex = styled.div`
    display:flex;
    flex-direction:column;
    width: 245px;
    background-color:#D9D9D9;
    border-radius: 16px;
    border: solid red 2px;
    height: 300px;

    & > div > img {
        border-radius: 16px;
    }
    & > p, h5 {
        align-self: center;
        padding: 0 10px;
        font-size: 14px;
        
    }

    & > h5 {
        font-weight: 600;
    }

`

export const StyledTestimony = styled.section`
    background-color: #495E57;

    & > h3 {
        padding-top: 50px;
        text-align: center;
        font-size: 2rem;
        font-family:karla;
        color:#fff;
    }

    @media (max-width: ${({theme})=>theme.mobile}){
        display:none;

    }
`

export const TestimonyFlex = styled.div`
    display:flex;
    justify-content: space-evenly;
    padding:50px;

`

export const TestimonyContaine = styled.div`
    background-color: #fff;
    width: 180px;


`

export const ChicagoContainer = styled.div`
    background-color: #fff;
    width:100%;
    
    display: flex;

    & > div {
        flex: 1;
    }


    & > div:nth-child(2) {
        width: 300px;
        height: 500px;
        position:relative;

    }

    & > div:nth-child(1) {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > h2 {
            color:#F4CE14;
            font-family: karla;
            font-size: 2rem;
            align-self: start;
            padding-left:98px;
        }

        & > h3 {
            font-family: karla;
            font-size: 1.5rem;
            align-self: start;
            padding-left:98px;
            color: #495E57;
        }

    }

`

export const StyledChicago = styled.div`
    width:100%;

    @media (max-width: ${({theme})=>theme.mobile}){
        display:none;

    }


`

export const ImageTwo = styled.img`
    width: 40%;
    height: 30%;
    z-index:4;
    position:absolute;
    top: 230px;
    right:240px;
    border: solid #fff 4px;

`



