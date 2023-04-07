import React from "react";
import { StyledProduct, FlexProduct, HFlex, Button, OnlineFlex, OnlineHFlex, OnlineVFlex} from "./Main.styled";
import { VFlex } from "./Flex.styled";
import greek from '../../Assets/greek.jpg'


const ProductSection = () => {
  return (
    <StyledProduct bg='#fff'>
        <OnlineFlex mg='80px'>
            <h3>ORDER FOR DELIVERY!</h3>
            <Button>Order Online</Button>
        </OnlineFlex>
        <FlexProduct fd='row'>
            <div>lunch</div>
            <div>main</div>
            <div>Dessert</div>
            <div>lunch</div>
        </FlexProduct>
        <OnlineFlex mg='0'>
            <OnlineHFlex>
                <OnlineVFlex>
                    <div>
                        <img src={greek} alt=""/>
                    </div>
                    <OnlineFlex>
                        <h5>Greek Salad</h5>
                        <p>$12.00</p>
                    </OnlineFlex>
                    <p>The famous gree salad of crispy lettus, pepper</p>
                    <h5>Order for delivery</h5>
                </OnlineVFlex>
                <OnlineVFlex>
                    <div>
                        <img src={greek} alt=""/>
                    </div>
                    <OnlineFlex>
                        <h5>Greek Salad</h5>
                        <p>$12.00</p>
                    </OnlineFlex>
                    <p>The famous gree salad of crispy lettus, pepper</p>
                    <h5>Order for delivery</h5>
                </OnlineVFlex>
                <OnlineVFlex>
                    <div>
                        <img src={greek} alt=""/>
                    </div>
                    <OnlineFlex>
                        <h5>Greek Salad</h5>
                        <p>$12.00</p>
                    </OnlineFlex>
                    <p>The famous gree salad of crispy lettus, pepper</p>
                    <h5>Order for delivery</h5>
                </OnlineVFlex>
            </OnlineHFlex>
        </OnlineFlex>
        <HFlex>
                <VFlex>
                    <h5>Greek Salad</h5>
                    <p>The famous gree salad of crispy lettus, pepper</p>
                    <p>$12.00</p>
                </VFlex>
                <VFlex>
                    <img src={greek} alt=""/>
                </VFlex>
        </HFlex>
        <HFlex>
                <VFlex>
                    <h5>Greek Salad</h5>
                    <p>The famous gree salad of crispy lettus, pepper</p>
                    <p>$12.00</p>
                </VFlex>
                <VFlex>
                    <img src={greek} alt=""/>
                </VFlex>
        </HFlex>
        <HFlex>
                <VFlex>
                    <h5>Greek Salad</h5>
                    <p>The famous gree salad of crispy lettus, pepper</p>
                    <p>$12.00</p>
                </VFlex>
                <VFlex>
                    <img src={greek} alt=""/>
                </VFlex>
        </HFlex>
    </StyledProduct>
  )
}

export default ProductSection