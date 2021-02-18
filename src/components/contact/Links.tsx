import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

function Links() {
  return (
    <div className='links'>
      <a data-aos="fade-up"
        href="https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73"
        target='_blank' className='link-margin'>
        <CgMail size={30} />
      </a>
      <a data-aos="fade-up"
        data-aos-delay='100'
        href="https://github.com/DanielAleks"
        target='_blank' className='link-margin'>
        <AiFillGithub size={30} />
      </a>
    </div>
  )
}

export default Links
