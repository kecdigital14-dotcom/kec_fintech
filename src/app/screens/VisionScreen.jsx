import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Vision1stSection from '../components/Vision1stSection'
import OtherHero from '../components/OtherHero'
import Vision2ndSection from '../components/Vision2ndSection'
import CalltoAction from '../components/CalltoAction'

const VisionScreen = () => {
    return (
        <div>
            <Navbar />
             <OtherHero title= "Our Vision " breadcrumbLabel="Smart Finance for a Smarter You."/>
            <Vision1stSection />
            <Vision2ndSection/>
            <CalltoAction />
            <Footer />
        </div>
    )
}

export default VisionScreen
