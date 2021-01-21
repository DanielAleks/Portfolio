import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

function Links() {
  return (
    <div className='links'>
      <a href="https://github.com/" target='_blank'>
        <AiFillLinkedin size={30} />
      </a>
      <a href="https://mail.google.com/" target='_blank' className='link-margin'>
        <AiFillGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/" target='_blank'>
        <CgMail size={30} />
      </a>
    </div>
  )
}

export default Links
