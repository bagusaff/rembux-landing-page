import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElement'

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/contact">Contact Us</FooterLink>
                                <FooterLink to="/contact">About us</FooterLink>
                                <FooterLink to="/contact">History</FooterLink>
                                <FooterLink to="/contact">Services</FooterLink>
                                <FooterLink to="/contact">Carrier</FooterLink>                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/contact">Contact Us</FooterLink>
                                <FooterLink to="/contact">About us</FooterLink>
                                <FooterLink to="/contact">History</FooterLink>
                                <FooterLink to="/contact">Services</FooterLink>
                                <FooterLink to="/contact">Carrier</FooterLink>                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/contact">Contact Us</FooterLink>
                                <FooterLink to="/contact">About us</FooterLink>
                                <FooterLink to="/contact">History</FooterLink>
                                <FooterLink to="/contact">Services</FooterLink>
                                <FooterLink to="/contact">Carrier</FooterLink>                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/contact">Contact Us</FooterLink>
                                <FooterLink to="/contact">About us</FooterLink>
                                <FooterLink to="/contact">History</FooterLink>
                                <FooterLink to="/contact">Services</FooterLink>
                                <FooterLink to="/contact">Carrier</FooterLink>                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Rembux
                        </SocialLogo>
                        <WebsiteRights>rembux {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
