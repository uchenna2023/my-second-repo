import React from 'react'
import { StyledMain } from './styles/Main.styled'
import HeroSection from './styles/HeroSection'
import ProductSection from './styles/ProductSection'
import { Container } from './styles/Container.styled'
import TestimonySection from './styles/TestimonySection'
import ChicagoSection from './styles/ChicagoSection'




const Main = () => {
  return (
    <StyledMain>
      <Container color='#fff'>
      <HeroSection />
      <ProductSection />
      <TestimonySection />
      <ChicagoSection />
      </Container>
    </StyledMain>
  )
}

export default Main