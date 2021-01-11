import React, { useState } from 'react'
import './nav.sass'

function NavBar() {
  const [fake, setFake] = useState(false)

  return (
    <nav className="navbar is-fixed-top nav-container" role="navigation" aria-label="main navigation">
      <div style={{ width: '60vw', display: 'flex' }}>
        <div className="navbar-start">
          <a className='email'>
            @daniel.
              <p className='email-colored'>aleksandrov</p>
          </a>
        </div>

        <div className="button-container">
              <a className='button-text'>About Me</a>
              <a className='button-text'>Projects</a>
              <a className='button-text'>Contact Me</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
