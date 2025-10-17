import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OtherHero from '../components/OtherHero'
import WhyUs1stSection from '../components/WhyUs1stSection'
import WhyUs2ndSection from '../components/WhyUs2ndSection'
import CalltoAction from '../components/CalltoAction'

const WhyUsScreen = () => {
    return (
        <div>
            <Navbar />
             <OtherHero title= "Why Us " breadcrumbLabel="Smart Finance for a Smarter You."/>
            <WhyUs1stSection/>
            <WhyUs2ndSection/>
            <CalltoAction />
            <Footer />
        </div>
    )
}

export default WhyUsScreen
