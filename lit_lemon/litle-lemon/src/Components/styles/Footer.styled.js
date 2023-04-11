import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: #495E57

`

export const FooterHFlex = styled.div`
    width:100%;
    border: solid white 1px;
`

export const FooterVFlex = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border: solid #fff 1px;
    width:100%;
    padding: 30px;

    & > ul {
        list-style:none;
    }

    & > div {
        width: 140px;
        height: 60px;
        border: solid black 1px;
        background-color:#fff;
    }

    & > div > img {
        width:120px;
        height:60px;
        

    }


    @media(max-width: ${({theme})=>theme.mobile}) {

        display:flex;
        flex-direction:column;
        align-items: flex-start;
    }


`
