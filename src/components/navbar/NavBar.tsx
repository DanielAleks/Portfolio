import React, { useState } from 'react'
import './nav.sass'
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <nav className="navbar is-fixed-top nav-container" role="navigation" aria-label="main navigation">
      <div className='nav-width'>

        <div className="navbar-start">
          <Link className='email' to="contact" spy={true} smooth={true} offset={50} duration={500}>
            @daniel.
              <p className='email-colored'>aleksandrov</p>
          </Link>
        </div>

        <div className="button-container">
          <Link className='button-text' to="about" spy={true} smooth={true} offset={50} duration={500}>
            About Me
          </Link>
          <Link className='button-text' to="projects" spy={true} smooth={true} offset={50} duration={500}>
            Projects
          </Link>
          <Link className='button-text' to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
