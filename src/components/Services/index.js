import React from 'react'
import {ServicesContainer,ServicesH1,ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon,ServicesP} from './ServiceElement'


import Icon from '../../images/main-image.png'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon} />
                    <ServicesH2>Redce Expense</ServicesH2>
                    <ServicesP>We rockin</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon} />
                    <ServicesH2>Redce Expense</ServicesH2>
                    <ServicesP>We rockin</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon} />
                    <ServicesH2>Redce Expense</ServicesH2>
                    <ServicesP>We rockin</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
