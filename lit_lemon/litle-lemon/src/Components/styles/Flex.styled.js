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
        padding: 0px 10px;
        justify-contents: flex-start;
        align-items: center;
        width:100%;

        img {
            width: 150px;
        }
    }

`