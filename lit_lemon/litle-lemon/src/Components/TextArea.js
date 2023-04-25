import React, { useState } from 'react'
import { StyledTextArea } from './styles/Container.styled'

const TextArea = ({info, onChange}) => {
    

  return (
    <StyledTextArea>
        <label>Additional Info</label>
        <textarea
            value={info}
            onChange={onChange}
            name="postContent"
            defaultValue="Do you have any extra info you will like to share"
            rows={4}
            cols={40}
            />
            
    </StyledTextArea>
  )
}

export default TextArea