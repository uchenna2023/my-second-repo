import React from 'react'
import { ChicagoContainer,StyledChicago, ImageTwo } from './Main.styled'
import { RecShape, CirShape, ImageOne, } from './Shapes.styled'
import M_A_2 from '../../Assets/M_A_2.jpg'
import chef_B from '../../Assets/chef_B.jpg'



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
                <ImageOne src={M_A_2} alt='' />
                <ImageTwo src={chef_B} alt='' />
            </div>
        </ChicagoContainer>
    </StyledChicago>
  )
}

export default ChicagoSection