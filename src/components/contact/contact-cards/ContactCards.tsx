import React from 'react'
import './contact-cards.sass'
import Boardwalk from '../../../assets/images/portfolio/boardwalk.jpg'
import PassGo from '../../../assets/images/portfolio/passGo.jpg'
import OutOfJail from '../../../assets/images/portfolio/outOfJail.jpg'

function ContactCards() {
  return (
    <div className='contact-cards-container'>
      <div className="contact-information">
        <img className='boardwalk-bg' src={Boardwalk} />
        <p>Phone Number:</p>
        <p>(503)-997-4024</p>
      </div>
      <div className="contact-information">
        <img className='pass-go-bg' src={PassGo} />
        <p>Email:</p>
        <p>daniel.aleksandrov73</p>
      </div>
      <div className="contact-information">
        <img className='jail-free-bg' src={OutOfJail} />
        <p>Github:</p>
        <p>DanielAleks</p>
      </div>
    </div>
  )
}

export default ContactCards
