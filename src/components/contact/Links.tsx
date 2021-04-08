import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import ReactGA from 'react-ga'

function Links() {
  
  const onGmailHandler = () => {
    ReactGA.event({
      category: 'Contact-Gmail',
      action: 'went to my gmail'
    });
  }
  
  const onGithubHandler = () => {
    ReactGA.event({
      category: 'Contact-Github',
      action: 'went to my github'
    });
  }

  return (
    <div className='links'>
      <a data-aos="fade-up"
        onClick={onGmailHandler}
        href="https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73"
        target='_blank' className='link-margin'>
        <CgMail size={30} />
      </a>
      <a data-aos="fade-up"
        data-aos-delay='100'
        onClick={onGithubHandler}
        href="https://github.com/DanielAleks"
        target='_blank' className='link-margin'>
        <AiFillGithub size={30} />
      </a>
    </div>
  )
}

export default Links
