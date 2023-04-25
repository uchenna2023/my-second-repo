
import styled from 'styled-components'


export const Container = styled.div`
    width:1000px;
    max-width:100%;
    margin: 0 auto;
    border: solid ${({ color }) => color} 2px;
`

export const BookingForm = styled.form`
    width: 60%;
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
    border-radius:20px;
    box-shadow: 8px 5px 18px 5px #202926;


    @media (max-width: ${({ theme }) => theme.mobile}){
        width: 80%;

    }


`

export const StyledBookingP = styled.section`
    background-color:#495E57;
    width: 100%;
    padding: 30px 0px;

    & > h2 {
        font-size: 1.8rem;
        text-align: center;
        margin: 20px 0px;
        color: #fff;
    }
`


export const BookingPageFlex = styled.div`
    display:flex;
    justify-content: space-around;

    & > div {
        width: 250px;
        margin:30px 0;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}){
        display:flex;
        flex-direction:column;
        

    }
`

export const BookingPageFlex2 = styled.div`
    display:flex;
    justify-content: space-around;

    & > div {
        width:250px;
        margin: 20px 0;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}){
        display:flex;
        flex-direction:column;

    }
`

export const RadioFlex = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:flex-start;
    margin-top: 10px;

    & > label {
        margin-top: 10px;
    }
`

export const StyledTextArea = styled.div`
    display:flex;
    flex-direction:column;
`

export const DateFlex = styled.div`
    display:flex;
    flex-direction:column;
`

export const TimeFlex = styled.div`
    display:flex;
    flex-direction:column;
`

