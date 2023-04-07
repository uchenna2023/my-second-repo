import React from 'react'
import { HeroFlex, StyledSection } from './Main.styled'
import { Flex } from './Flex.styled'
import { Button } from './Main.styled'
import restauranfood from '../../Assets/restauranfood.jpg'

const HeroSection = () => {
  return (
    <StyledSection bg='#495E57'>
      <h1>Little Lemon</h1>
        <Flex padding='0px'>
            <HeroFlex>
                <h1>Little Lemon</h1>
                <p>Little lemon is traditional restaurant that prepare the best African salad and dishes prepared with the best ingredient across Africa</p>
                <Button>Reserve a table</Button>
            </HeroFlex>
            <HeroFlex>
                <img src={restauranfood} alt=''/>
            </HeroFlex>
        </Flex>
        <Button>Reserve a table</Button>
    </StyledSection>
  )
}

export default HeroSection