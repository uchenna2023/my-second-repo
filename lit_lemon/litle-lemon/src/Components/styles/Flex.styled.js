import styled from 'styled-components'


export const Flex = styled.div`
    display: flex;
    align-item: center;
    padding: 0px 20px;
    width:100%;
    border:solid green 1px;


    & > div,
    & > ul {
        flex:1;
    }


    & div:nth-child(1) {
        display: flex;
        align-items: center;
    }

    & > div > img {
        width: 230px;
    }

    & div > img {
        background-color: #fff;
        margin-left:0px;
        padding:${({padding})=>padding}
    }

    & div:nth-child(2) {
        position: relative;
    }



    @media (max-width: ${({theme})=>theme.mobile}){
        display: flex;
        padding: 0px 40px;
        justify-contents: flex-start;
        align-items: center;
        width:100%;

        & img {
            width: 100px;
            padding: 10px;
        }

        & > div > h5, p {
            margin: 0px;
            align-self: start;
        }

      

    }

`
export const VFlex = styled.div`
    
    @media (max-width: ${({theme})=>theme.mobile})
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border: solid green 1px;

    & > h5, p {
        margin: 0px;
    }

    & > p {
        font-size: 14px;
    }

    & > img {
        padding: 0px;
        width: 125px;
    }


`