import React from 'react'
import './navbar.sass'
import {
  Link
} from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({ setIsNav, isNav, size }) {
  return (
    <>
      {size.width < 900 &&
        <div className='mobile-nav-container'>
          <div
            onClick={() => setIsNav(!isNav)}
            className='nav-icon-container'
          >
            <GiHamburgerMenu
              size={30} className='navbar-icon'
            />
          </div>
        </div>
      }

      <nav className='nav-container'>
        {isNav &&
          <>
            <Link className='nav-item' to="/">Home</Link>
            <Link className='nav-item' to="/about">About</Link>
            <Link className='nav-item' to="/projects">Projects</Link>
            <Link className='nav-item' to="/tech">Technologies</Link>
            <Link className='nav-item' to="/contact">Contact</Link>
          </>
        }
      </nav>
    </>
  )
}

export default Navbar
