import styled from 'styled-components'


export const Flex = styled.div`
    display: flex;
    align-item: center;
    padding: 0px 20px;
    width:100%;


    & > div,
    & > ul,
    & > img {
        flex: 1;
    }

    @media (max-width: ${({theme})=>theme.mobile}){
        display: flex;
        flex-direction: column;
        padding: 0 20px;

        img {
            width:150px;
        }
    }

`