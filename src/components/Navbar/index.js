import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

import {
    Nav,
    NavbarContainer,
    NavLogo , 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElement'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const scrolled =()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',scrolled)
    }, [])

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>rembux</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="motto"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Why Choose Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="pricing"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Pricing</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Tell Us What You Want!</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
