import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url(<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Karla:wght@300;400;600;700&display=swap">);

    * {
        box-sizing:border-box;
    }

    body {
        background-color: #fff;
        font-family: 'Karla', sans-serif;
        margin: 0;
    }


    img {
        max-width:100%;
    }

    p {
        line-height: 1.5;

    }
`
export default GlobalStyle
