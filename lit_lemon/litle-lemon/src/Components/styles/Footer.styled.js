import styled from "styled-components";


export const StyleFooter = styled.footer`
    width: 100%;
    background-color: #495E57;
    ;
`
export const FooterUList = styled.ul`
    list-style: none;
    display:flex;
    flex-direction: column;
    gap: 10px;

    li {
        font-size: 14px;
        padding-left: 20px;
    }

    li > div {
        background-color: #fff;
        width: 100%;
        display:flex;
        

        img {
            width: 20px;
        }
    }

   

`