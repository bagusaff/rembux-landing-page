import React,{useState} from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/AboutSection/data'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection {...homeObjOne}/>
            <Services/>
            <AboutSection {...homeObjTwo}/>
            <AboutSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home
