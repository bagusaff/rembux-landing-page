import React from 'react'

import bg from '../../images/background.png'
import image from '../../images/main-image.png'

import {Container,Wrapper,InnerWrapper,Left,TiltWrapper,Img,BtnContainer,button} from './HeroElement'


const HeroSection = () => {
    return (
        <Container bg={bg}>
            <Wrapper>
                <InnerWrapper>
                <Left>
                    <h5>Create your dream application now!</h5>
                    <h1>Your</h1>
                    <h1>Will</h1>
                    <h1>Is Our</h1>
                    <h1>Priority</h1>
                    <BtnContainer>
                        <button>Contact Us</button>
                    </BtnContainer>
                </Left>
                <TiltWrapper options={{ max: 25 }}>
                    <Img src={image} alt="@gouthamgtronics" />
                </TiltWrapper>
                </InnerWrapper>
            </Wrapper>
        </Container>
    )
}

export default HeroSection
