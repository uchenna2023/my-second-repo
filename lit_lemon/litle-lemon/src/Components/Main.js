import React, { useReducer } from 'react'
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import { Routes, Route } from 'react-router-dom'
import TestimonySection from './styles/TestimonySection'
import RegisterPage from './Pages/RegistrationPage/RegisterPage'

{/*const initializeTime = ()=> {
{/*const times = [{id:1, time:'17:00'}, {id:2, time:'18:00'}, {id:3,time:'19:00'}, {id:4, time:'20:00'} ];
  const times = ['17:00', '18:00', '19:00', '20:00']
  console.log(times[0]);
  return times[0];

  

}*/}

{/*function updateTimes(state, action) {
  switch (action.type) {
    case {date.getDay(4)}:
      return '17:00';
    default:
      return state;


  }
}*/}




const Main = () => {
 



  return (
    <Routes> 
      <Route path=""element={<HomePage />}></Route>
      <Route path="/reservation" element={<BookingPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login_page" element={<LoginPage />}></Route>

    </Routes>
  )
}

export default Main