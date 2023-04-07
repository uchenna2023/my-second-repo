import styled from "styled-components";

export const StyledTestCard = styled.div`
    background-color:#fff;
    width: 200px;
    position: relative;
    box-shadow: 6px 5px 19px 9px #353D31;
    border-radius:16px;

`



export const Avater = styled.div`
    width: 90px;
    height:90px;
    border: solid #495E57 5px;
    margin: 0 auto;
    border-radius:100%;
    margin-top: 20px;
    

    & > img {
        width: 80px;
        height:80px;
        object-fit:fill;
        border-radius:100%;
        border: solid #fff 3px;
        
    }

`

export const AvaterDetails = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 10px;

    & > h4 {
        align-self:center;
        margin: 0;
        margin-top: 10px;
    }

    & > p {
        font-size: 0.8rem;
        border-style: solid none double none;
        padding:10px;
        border-color:#495E57;


    }
    & > p > img {
        width: 16px;
    }

    & > h5 {
        margin: 0;
    }
`

export const StarFlex = styled.div`
    display:flex;
    justify-content: center;
    padding: 10px 0px;
`