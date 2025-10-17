import React from 'react'
import ContactusSection from '../components/ContactusSection'
import Navbar from '../components/Navbar'
import OtherHero from '../components/OtherHero'
import Footer from '../components/Footer'
import CalltoAction from '../components/CalltoAction'

const ContactScreen = () => {
  return (
    <div>
      <Navbar/>
      <OtherHero title= "Contact Us " breadcrumbLabel="Smart Finance for a Smarter You."/>
       <ContactusSection/>
       <CalltoAction/>
       <Footer/>
    </div>
  )
}

export default ContactScreen
