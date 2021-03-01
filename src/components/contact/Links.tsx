import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import ReactGA from 'react-ga'

function Links() {

  const githubEventHandler = () => {
    ReactGA.event({
      category: 'Contact',
      action: 'went to Github link'
    });
  }
  
  const gmailEventHandler = () => {
    ReactGA.event({
      category: 'Contact',
      action: 'went to Gmail link'
    });
  }

  return (
    <div className='links'>
      <a
        onClick={gmailEventHandler}
        data-aos="fade-up"
        href="https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73"
        target='_blank' className='link-margin'>
        <CgMail size={30} />
      </a>
      <a
        onClick={githubEventHandler}
        data-aos="fade-up"
        data-aos-delay='100'
        href="https://github.com/DanielAleks"
        target='_blank' className='link-margin'>
        <AiFillGithub size={30} />
      </a>
    </div>
  )
}

export default Links
