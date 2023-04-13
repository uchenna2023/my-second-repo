import React from 'react'
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import { Routes, Route } from 'react-router-dom'
import TestimonySection from './styles/TestimonySection'




const Main = () => {
  return (
    <Routes> 
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/reservation" element={<BookingPage />}></Route>
    </Routes>
  )
}

export default Main