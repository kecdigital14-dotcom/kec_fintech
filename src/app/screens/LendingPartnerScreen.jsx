import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LendingPartnerscomp from '../components/LendingPartnerscomp'
import OtherHero from '../components/OtherHero'

const LendingPartnerScreen = () => {
  return (
    <div>
      <Navbar/>
      <OtherHero title= "Lending Partners " breadcrumbLabel="Smart Finance for a Smarter You."/>
      <LendingPartnerscomp/>
      <Footer/>
    </div>
  )
}

export default LendingPartnerScreen
