import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PolicyOne from '../components/PolicyOne'
import PolicyTwo from '../components/PolicyTwo'
import PolicyThree from '../components/PolicyThree'
import PolicyFour from '../components/PolicyFour'
import PolicyFive from '../components/PolicyFive'
import OtherHero from '../components/OtherHero'


const PolicyScreen = () => {
    return (
        <div>
            <Navbar />
               <OtherHero title= "Our Policies" breadcrumbLabel="Smart Finance for a Smarter You."/>
            <PolicyOne />
            <PolicyTwo />
            <PolicyThree/>
            <PolicyFour/>
            <PolicyFive/>
            <Footer />
        </div>
    )
}

export default PolicyScreen
