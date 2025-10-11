"use client"

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Home2ndSection from '../components/Home2ndSection';
import Home3rdSection from '../components/Home3rdSection';
import Home4thSection from '../components/Home4thSection';
import Home5thSection from '../components/Home5thSection';
import Home6thSection from '../components/Home6thSection';
import Home7thSection from '../components/Home7thSection';
import Home8thSection from '../components/Home8thSection';
import Footer from '../components/Footer';

const HomeScreen = () => {
    return (
        <div className="flex flex-col  min-h-screen">
           <Navbar/>
           <HeroSection/>
           <Home2ndSection/>
           <Home3rdSection/>
           <Home4thSection/>
           <Home5thSection/>
           <Home6thSection/>
           <Home7thSection/>
           <Home8thSection/>
           <Footer/>
        </div>
    );
};

export default HomeScreen;