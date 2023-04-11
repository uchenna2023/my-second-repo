import React from 'react';
import { StyleHeader, UList, Nav, Logo, Hamburger } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import little_logo from '../Assets/little_logo.svg'
import hamburger from '../Assets/hamburger.svg'


const Header = () => {
  return (
    <StyleHeader>
        <Nav>
          <Logo src={little_logo} alt=''/>
          <UList>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Online order</li>
            <li>Login</li>
          </UList>
          <Hamburger src={hamburger} alt='' />
        </Nav>
    </StyleHeader>
  )
}

export default Header