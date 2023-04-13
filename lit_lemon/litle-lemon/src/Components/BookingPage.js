import React from 'react'
import { StyledBookingP, FormContainer, BookingPageFlex, BookingPageFlex2} from './styles/Container.styled'
import { Select } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useState } from 'react';
import { Textarea } from '@chakra-ui/react'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';




const BookingPage = () => {
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState('10:00');

  return (
    <StyledBookingP>
        <FormContainer>
          <h2>Reserve Tables Details</h2>
          <h4>Price: $40</h4>
          <BookingPageFlex>
            <div>
              <p>Number of Table</p>
              <Select placeholder='Select option' size='lg'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </div>
            <div>
              <p>Occassion type</p>
              <Select placeholder='Select option' size='lg'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </div>
          </BookingPageFlex>
          <Divider marginTop={5} />
          <RadioGroup defaultValue='2' marginTop={0} padding={5}>
              <Stack spacing={5}>
                <Radio colorScheme='red' value='1'>
                  Radio
                </Radio>
                <Radio colorScheme='green' value='2'>
                  Radio
                </Radio>
              </Stack>
            </RadioGroup>
            <Divider marginTop={5} />
            <BookingPageFlex2>
              <div>
                <p>Set Date</p>
                <DatePicker onChange={onChange} value={value} />
              </div>
              <div>
                <p>Set Date</p>
                <TimePicker onChange={setTime} value={time} />
              </div>
            </BookingPageFlex2>
            <p>Additional Infomation</p>
            <BookingPageFlex>
              <Textarea placeholder='Here is a sample placeholder' />
            </BookingPageFlex>
        </FormContainer>
    </StyledBookingP>
  )
}

export default BookingPage