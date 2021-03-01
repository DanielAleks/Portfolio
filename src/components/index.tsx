import React, { useEffect } from 'react'
import About from './about/About'
import Contact from './contact/Contact'
import Intro from './introduction/Intro'
import NavBar from './navbar/NavBar'
import Projects from './projects'
import './style.sass'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true
});

function Main() {

  useEffect(() => {
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className='omni-container'>
      <NavBar />
      <Intro />
      <About />
      <hr />
      <Projects /> 
      <Contact />
    </div>
  )
}

export default Main


