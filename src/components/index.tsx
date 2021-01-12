import React from 'react'
import About from './about/About'
import Contact from './contact/Contact'
import Intro from './introduction/Intro'
import NavBar from './navbar/NavBar'
import Preview from './projects/Preview'
import Projects from './projects/Projects'
import './style.sass'

function Main() {
  return (
    <div style={{ backgroundColor: '#181818' }}>
      <NavBar />
      <Intro />
      <About />
      <hr />
      <Preview />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main
