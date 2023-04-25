import React, { useReducer } from 'react'
import { StyledBookingP, BookingForm, BookingPageFlex, BookingPageFlex2 } from './styles/Container.styled'
import { Select } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useState } from 'react';
import TextArea from './TextArea';
import RadioInput from './RadioInput'
import { RadioFlex } from './styles/Container.styled';
import Time from './Time';
import DateElement from './DateElement';


const types = {
  DATE: 'DATE',
  TIME: 'TIME'
}

function updateTimes(state, action) {
  switch (action.type) {
    case types.DATE:
      return { ...state, date: action.value }
    case types.TIME:
      return { ...state, time: action.value }
    default:
      return state;


  }
}



const initializeTime = {
  date:'2023-06-04',
  time:'17:00'
}


const BookingPage = () => {

  const [state, dispatch] = useReducer(updateTimes, initializeTime)
  const [table, setTable] = useState('one');
  const [occassion, setOccasion] = useState();
  const [redio, setRedio] = useState("Indoor");
  const [info, setInfo] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(table + ' ' + occassion + ' ' + redio + ' ' + info + ' '+ state.date + ' '+ state.time);
  }


  return (
    <StyledBookingP>
      <h2>Reserve Tables Details</h2>
      <BookingForm onSubmit={handleSubmit}>
        <BookingPageFlex>
          <div>
            <label htmlfor='table'>Number of Guest</label>
            <Select id='table' placeholder='Select option' size='lg' value={table} onChange={(e) => setTable(e.target.value)}>
              <option value='one'>One</option>
              <option value='two'>Two</option>
              <option value='three'>Three</option>
              <option value='four'>Four</option>
              <option value='five'>Five</option>
              <option value='six'>Six</option>
            </Select>
          </div>
          <div>
            <label htmlFor='occation'>Occassion Type</label>
            <Select id='ocassion' placeholder='Select option' size='lg' value={occassion} onChange={(e) => setOccasion(e.target.value)}>
              <option value='wedding'>Wedding</option>
              <option value='birthday'>Birthday</option>
              <option value='engagement'>Engagement</option>
            </Select>
          </div>
        </BookingPageFlex>
        <Divider marginTop={5} />
        <RadioFlex>
          <label>
            <RadioInput type="radio" value={redio === 'Indoor'} onChange={() => setRedio("Indoor")} />
            Indoor
          </label>
          <label>
            <RadioInput type="radio" value={redio === 'Outdoor'} onChange={() => setRedio('Outdoor')} />
            Outdoor
          </label>
        </RadioFlex>
        {/*<RadioGroup defaultValue='2' marginTop={0} padding={5}>
              <Stack spacing={5}>
                <Radio colorScheme='red' value={redio === 'Indoor'} onChange={()=>setRedio('Indoor')}>
                  Indoor
                </Radio>
                <Radio colorScheme='green' value={redio === 'Outdoor'} onChange={()=>setRedio('Outdoor')}>
                  Outdoor
                </Radio>
              </Stack>
  </RadioGroup>*/}
        <Divider marginTop={5} />
        <BookingPageFlex2>
          <DateElement date={state.date} onChange={event => {
          dispatch({ type: types.DATE, value: event.target.value })
        }} />
          <Time time={state.time} onChange={event => {
          dispatch({ type: types.TIME, value: event.target.value })
        }} />
        </BookingPageFlex2>
        <TextArea value={info} onChange={(e) => setInfo(e.target.value)} />
        <input type='submit' value='Submit' />
      </BookingForm>
    </StyledBookingP>
  )
}

export default BookingPage