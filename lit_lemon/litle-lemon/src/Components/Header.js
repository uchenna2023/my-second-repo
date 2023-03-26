import React from 'react'
import Logo from '../Assets/Logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
        <img src={Logo} alt=''/>
        <Nav />
    </header>
  )
}

export default Header