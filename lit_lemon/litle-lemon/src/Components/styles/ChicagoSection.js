import React from 'react'
import { ChicagoContainer,StyledChicago, ImageTwo } from './Main.styled'
import { RecShape, CirShape, ImageOne, } from './Shapes.styled'
import restauranfood from '../../Assets/restauranfood.jpg'
import greek from '../../Assets/greek.jpg'



const ChicagoSection = () => {
  return (
    <StyledChicago>
        <ChicagoContainer>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>we are known for quality and delicious<br/> meal that are made from the best <br/>best chef in the country. <br/>In our Restuarant you are sure getting the <br/>best service to had ever wanted.</p>
            </div>
            <div>
                <RecShape position='absolute'/>
                <CirShape />
                <ImageOne src={restauranfood} alt='' />
                <ImageTwo src={greek} alt='' />
            </div>
        </ChicagoContainer>
    </StyledChicago>
  )
}

export default ChicagoSection