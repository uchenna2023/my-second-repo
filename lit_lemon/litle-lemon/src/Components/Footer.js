import React from 'react'
import { StyledFooter } from './styles/Footer.styled'
import { FooterHFlex, FooterVFlex } from './styles/Footer.styled'
import little_logo from '../Assets/little_logo.svg'



const Footer = () => {
  return (
    <StyledFooter>
        <FooterHFlex>
            <FooterVFlex>
                <div>
                    <img src={little_logo} alt=''/>
                </div>
                <ul>
                    <li>list 1</li>
                    <li>list 2</li>
                    <li>list 2</li>
                </ul>
                <ul>
                    <li>list 1</li>
                    <li>list 2</li>
                    <li>list 2</li>
                </ul>
            </FooterVFlex>
        </FooterHFlex>
    </StyledFooter>
  )
}

export default Footer