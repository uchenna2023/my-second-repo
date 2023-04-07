import styled from "styled-components";

export const StyledRectangle = styled.div`
    background-color: background: radial-gradient(circle, rgba(178,179,182,1) 0%, rgba(91,87,88,1) 100%);
    width: 300px;
    height: 300px;
`

export const RecShape = styled.div`
    width: 40%;
    height:40%;
    border: solid green 1px;
    background: radial-gradient(circle, rgba(158,163,162,1) 0%, rgba(73,94,87,1) 100%);
    z-index:1;
    position: ${({position})=>position};
    top: 90px;
    right: 100px;
    border-radius:20px;

`

export const CirShape = styled.div`
    width: 40%;
    height:40%;
    border: solid green 1px;
    background: radial-gradient(circle, rgba(158,163,162,1) 0%, rgba(73,94,87,1) 100%);
    z-index:2;
    border-radius:20px;
    position:absolute;
    top: 210px;
    right:270px;
    

`
export const ImageOne = styled.img`
    width: 40%;
    height: 30%;
    z-index:3;
    position:absolute;
    top: 120px;
    right: 130px;
    border: solid #fff 4px;
`

