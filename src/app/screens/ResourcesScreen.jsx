"use client";

import React from 'react'
import Navbar from '../components/Navbar'
import OtherHero from '../components/OtherHero';
import DownloadComp from '../components/DownloadComp';
import Footer from '../components/Footer';

const ResourcesScreen = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
 <OtherHero title="Resources " breadcrumbLabel="Smart Finance for a Smarter You." />
      <DownloadComp
        title="Investment Brochure"
        description="Explore our CBG Park with cutting-edge biofuel solutions."
        brochurePdfUrl="/images/KECProfileJune25.pdf"
        fileName="CBG-Park.pdf"
        whatsInside={[
          "Overview of KEC Investment",
          "Technology and Process Flow",
          "Benefits and Use Cases",
          "Contact Information"
        ]}
        moreInfoTitle="Want to Partner with Us?"
        moreInfoDesc="Learn how our KEC solutions can help you achieve sustainable growth."
        moreInfoButtonText="Contact Us"
        moreInfoButtonLink="/contact"
      />




      <Footer/>
    </div>
  )
}

export default ResourcesScreen
