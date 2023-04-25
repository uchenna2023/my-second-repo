import React from 'react'
import { TimeFlex } from './styles/Container.styled';

const Time = ({time, onChange}) => {
    
  return (
    <TimeFlex>
      <label for="res-time">Choose Time</label>
      <select id="res-time " value={time} onChange={onChange}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
      </select>
  </TimeFlex>
  )
}

export default Time;