import styled from "styled-components";

export const StyledRegistrationPage = styled.div`
    background-color: #495E57;
    padding: 3em;

    & > form {
        background-color: white;
        width:50%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        align-items:center;
        display:relative;
        border-radius: 16px;

        
        & > div {
            border: none;
            display:flex;
            margin: 1em;
            padding:0.5em;
            border-bottom: solid gray 2px;
            align-items:center;
            
            & > span {
                cursor:pointer;
            }
        }

        & > input[type=submit] {
            margin:2em 1em;
            padding:.5em 2em;
            background-color: #F4CE14;
            border: solid #F4CE14 1px;
            border-radius: 20px;
            color: #333333;
            font-size: 100%;
            font-family: karla;
            font-weight: 700;
            cursor: pointer;


        }
        & > div > input:focus {

            border:none;
            outline:none;
        }

        & > h3 {
            padding:1.5em 0em;
            font-weight: 700;
            color:495E57;
        }
    }
`