import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SocialLinks from './Components/SocialLinks/SocialLinks';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <SocialLinks></SocialLinks>
        <About></About>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Contact></Contact>
       <Footer></Footer>
    </div>
    
  );
}

export default App;
