import React from 'react'
import Navbar from '../components/Navbar'
import ProjectOne from '../components/ProjectOne';
import OtherHero from '../components/OtherHero';
import ProjectTwo from '../components/ProjectTwo';
import Footer from '../components/Footer';
import ProjectThree from '../components/ProjectThree';
import ProjectFour from '../components/ProjectFour';
import ProjectFive from '../components/ProjectFive';

const ProjectScreen = () => {
  return (
    <div>
      <Navbar />
      <OtherHero title="Our Projects" breadcrumbLabel="Smart Finance for a Smarter You." />
      <ProjectOne />
       <ProjectTwo />
       <ProjectThree/>
       <ProjectFour/>
       <ProjectFive/>
      <Footer />
    </div>
  )
}

export default ProjectScreen
