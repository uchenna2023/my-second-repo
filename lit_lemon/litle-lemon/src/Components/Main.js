import React from 'react'
import { StyledMain } from './styles/Main.styled'
import HeroSection from './styles/HeroSection'
import { Container } from './styles/Container.styled'


const Main = () => {
  return (
    <StyledMain>
      <Container>
      <HeroSection />
      </Container>
    </StyledMain>
  )
}

export default Main