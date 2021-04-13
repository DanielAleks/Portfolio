import React, { useState } from 'react'
import './navbar.sass'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({ setIsNav, isNav, size, isAnimated, setIsAnimated }) {

  const closeMobileNav = () => {
    setIsAnimated(!isAnimated)
    if (size.width < 900) {
      if (!isNav) {
        setIsNav(!isNav)
      } else
      setTimeout(() => {
        setIsNav(!isNav)
      }, 500)
    } else setIsNav(isNav)
  }

  const animationDelayMe = (id) => {
    if (size.width < 900) {
      if (isAnimated) {
        return id * .02
      } else if (id === 0) {
        return .1
      } else if (id === 1) {
        return .075
      } else if (id === 2) {
        return .05
      } else if (id === 3) {
        return .025
      } else if (id === 4) {
        return 0
      }
    } else return id * .1
  }

  // size.width < 900 ? `${id * .05}s` : `${id * .1}s`

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Technologies', to: '/tech' },
    { name: 'Contact', to: '/contact' }
  ]


  return (
    <>
      {size.width < 900 &&
        <div className='mobile-nav-container'>
          <div
            onClick={closeMobileNav}
            className='nav-icon-container'
          >
            <GiHamburgerMenu
              onClick={closeMobileNav}
              size={30} className='navbar-icon'
            />
          </div>
        </div>
      }

      <nav onClick={closeMobileNav} className='nav-container'>
        {isNav &&
          <>
            {navItems.map((item, id) =>
              <Link
                style={{ animationDelay: `${animationDelayMe(id)}s` }}
                className={isAnimated ? 'nav-item' : 'nav-item-off'}
                to={item.to}>{item.name}</Link>
            )}
          </>
        }
      </nav>
    </>
  )
}

export default Navbar
