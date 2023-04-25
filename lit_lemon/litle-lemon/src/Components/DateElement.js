import React from 'react'
import { DateFlex } from './styles/Container.styled'


const DateElement = ({date, onChange}) => {
  
    
  return (
    <DateFlex>
        <label htmlFor='res-date'>Set Date</label>
        <input type='date' id='res-date' value={date} onChange={onChange}/>
    </DateFlex>
  )
}

export default DateElement