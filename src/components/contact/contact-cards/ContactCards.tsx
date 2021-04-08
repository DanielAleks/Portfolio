import React from 'react'
import './contact-cards.sass'

function ContactCards() {
  return (
    <div className='contact-cards-container'>
      <div className="contact-information">
        <div className='boardwalk-bg' />
        <p>Phone Number:</p>
        <p>(503)-997-4024</p>
      </div>
      <div className="contact-information">
        <div className='pass-go-bg' />
        <p>Email:</p>
        <p>daniel.aleksandrov73</p>
      </div>
      <div className="contact-information">
        <div className='jail-free-bg' />
        <p>Github:</p>
        <p>DanielAleks</p>
      </div>
    </div>
  )
}

export default ContactCards
