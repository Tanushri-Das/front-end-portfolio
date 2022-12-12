import React from 'react';
import Home from '../Home/Home';
import SocialLinks from '../SocialLinks/SocialLinks';
import About from '../About/About';
import Portfolio from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';

const HomePage = () => {
  return (
    <div>
        {/* <Navbar></Navbar> */}
        <Home></Home>
        <SocialLinks></SocialLinks>
        <About></About>
        <Portfolio></Portfolio>
        {/* <MyProjects></MyProjects> */}
        <Skills></Skills>
        <Contact></Contact>
       {/* <Footer></Footer> */}
    </div>
  )
}

export default HomePage