import React from 'react'
import { Container } from './styles/Container.styled'
import { StyleFooter } from './styles/Footer.styled'
import { Flex } from './styles/Flex.styled'
import { FooterUList } from './styles/Footer.styled'
import little_logo from '../Assets/little_logo.svg'


const Footer = () => {
  return (
    <StyleFooter>
        <Container>
            <Flex>
                    <img src={little_logo} alt=''/>
                <div>
                    <FooterUList>
                        <li>list</li>
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
            </Flex>
        </Container>
    </StyleFooter>
  )
}

export default Footer