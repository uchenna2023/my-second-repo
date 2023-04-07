import React from "react";
import { StyledTestimony, TestimonyFlex, TestimonyContainer, TestimonyHFlex} from "./Main.styled";
import Testimony from "../Testimony";



const TestimonySection = () => {
  return (
    <StyledTestimony>
        <h3>Testimonials</h3>
        <TestimonyFlex>
            <Testimony />
            <Testimony />
            <Testimony />
        </TestimonyFlex>
    </StyledTestimony>
  )
}

export default TestimonySection