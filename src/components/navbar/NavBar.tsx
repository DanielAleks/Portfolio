import { Link } from "react-scroll";
import './nav.sass'

function NavBar() {
  return (
    <nav className="navbar is-fixed-top nav-container" role="navigation" aria-label="main navigation">
      <div className='nav-width'>

        <div className="navbar-start">
          <a className='email' href='https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73' target='_blank'>
            @daniel.
              <p className='email-colored'>aleksandrov</p>
          </a>
        </div>

        <div className="button-container">
          <Link className='button-text' to="about" spy={true} smooth={true} offset={-20} duration={500}>
            About Me 
          </Link>
          <Link className='button-text' to="projects" spy={true} smooth={true} offset={0} duration={500}>
            Projects
          </Link>
          <Link className='button-text' to="contact" spy={true} smooth={true} offset={-100} duration={500}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav> 
  )
}

export default NavBar
