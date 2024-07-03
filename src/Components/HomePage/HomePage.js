import React from 'react';
import Home from '../Home/Home';
import SocialLinks from '../SocialLinks/SocialLinks';
import About from '../About/About';
import Portfolio from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';

const HomePage = () => {
  return (
    <div>
        <Home></Home>
        <SocialLinks></SocialLinks>
        <About></About>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Experience></Experience>
        <Contact></Contact>
    </div>
  )
}

export default HomePage