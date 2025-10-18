import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllServices from '../components/AllServices'
import OtherHero from '../components/OtherHero'

const ServiceScreen = () => {
  return (
    <div>
      <Navbar/>
      <OtherHero title= "Our Services" breadcrumbLabel="Smart Finance for a Smarter You."/>
         <AllServices/>
      <Footer/>
    </div>
  )
}

export default ServiceScreen
