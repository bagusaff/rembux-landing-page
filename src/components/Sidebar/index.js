import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon> 
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Why Choose Us
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Our Team
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Pricing
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact" onClick={toggle}>Tell Us !</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
