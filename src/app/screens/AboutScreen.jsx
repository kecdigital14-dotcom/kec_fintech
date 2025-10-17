import React from 'react'
import Navbar from '../components/Navbar'
import OtherHero from '../components/OtherHero'
import About1stSection from '../components/About1stSection'
import About2ndSection from '../components/About2ndSection'
import About3rdSection from '../components/About3rdSection'
import About4thSection from '../components/About4thSection'
import About5thSection from '../components/About5thSection'
import Footer from '../components/Footer'

const AboutScreen = () => {
    return (
        <div>
            <Navbar />
            <OtherHero title= "About Us " breadcrumbLabel="Smart Finance for a Smarter You."/>
            <About4thSection/>
            <About1stSection/>
            <About5thSection/>
            <Footer/>
            {/* <About2ndSection/> */}
        </div>
    )
}

export default AboutScreen
