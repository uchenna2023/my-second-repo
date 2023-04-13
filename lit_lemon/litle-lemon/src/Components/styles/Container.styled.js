
import styled from 'styled-components'


export const Container = styled.div`
    width:1000px;
    max-width:100%;
    margin: 0 auto;
    border: solid ${({color})=>color} 2px;
`

export const FormContainer = styled.div`
    width: 60%;
    background-color: #fff;
    margin: 0 auto;
    border: solid red 2px;
    padding: 20px;

    &
    

`

export const StyledBookingP = styled.section`
    background-color:#495E57;
    width: 100%;
    padding: 30px 0px;
`


export const BookingPageFlex = styled.div`
    display:flex;
    justify-content: space-around;

    & > div {
        width: 250px;
        margin:30px 0;
    }
    
`

export const BookingPageFlex2 = styled.div`
    display:flex;
    justify-content: space-around;

    & > div {
        width:250px;
        margin: 20px 0;
    }
    
`


