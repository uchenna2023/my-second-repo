import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import chef_B from '../Assets/chef_B.jpg'
import { StyledTestCard, Avater, AvaterDetails } from './styles/Testimony.styled'
import quoteUp from '../Assets/quoteUp.svg'
import quoteDown from '../Assets/quoteDown.svg'
import { StarFlex } from './styles/Testimony.styled'


const Testimony = () => {
  return (
    <StyledTestCard>
        <Avater>
            <img src={chef_B} alt=''/>
        </Avater>
        <AvaterDetails>
            <h4>Officer</h4>
            <p><img src={quoteUp} alt=''/> He like to eat with in the company office. i like the quality of food little lemon are preparing. <img src={quoteDown} alt=''/></p>
            <StarFlex>
                <FontAwesomeIcon icon={faStar} style={{color: "#5f6063",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#5f6063",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#5f6063",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#5f6063",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#d9dadd",}} />
            </StarFlex>
        </AvaterDetails>
    </StyledTestCard>
  )
}

export default Testimony