import React from 'react'
import { Container } from './styles/Container.styled'
import { StyleFooter } from './styles/Footer.styled'
import { FooterUList } from './styles/Footer.styled'
import little_logo from '../Assets/little_logo.svg'
import { VFlex } from './styles/Flex.styled'


const Footer = () => {
  return (
    <StyleFooter>
        <Container>
            <VFlex padding='10px'>
                <div>
                    <img src={little_logo} alt=''/>
                </div>
                <div>
                    <FooterUList>
                        <li>List</li>
                        <li>lisy</li>
                        <li>list</li>
                        <li>list</li>
                    </FooterUList>
                </div>
                <div>
                    <FooterUList>
                        <li>Home</li>
                        <li>Home</li>
                        <li>omw</li>
                        <li>home</li>
                    </FooterUList>
                </div>
                    <div>
                        <FooterUList>
                            <li>about</li>
                            <li>about</li>
                            <li>about</li>
                            <li>about</li>
                        </FooterUList>
                    </div>
            </VFlex>
        </Container>
    </StyleFooter>
  )
}

export default Footer