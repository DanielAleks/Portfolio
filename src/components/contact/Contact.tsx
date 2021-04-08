import React, { useState } from 'react'
import Links from './Links'
import emailjs from 'emailjs-com';
import './contact.sass'
import { AiFillGithub, AiOutlinePhone } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import ContactCards from './contact-cards/ContactCards';

function Contact() {
  const [messageInput, setMessageInput] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_81rn6db', e.target, 'user_6Nv2PbCHu4Ra401EdmDtl')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div id='contact' className='ctt-container contactC'>

      <ContactCards />

      <form className="contact-form" onSubmit={sendEmail}>
        <section className="ctt-width section">
          <p data-aos="fade-up" className='header'>Contact Me</p>
          <div className="field">
            <label data-aos="fade-up" className="label">Name</label>
            <div className="control">
              <input data-aos="fade-up" className="input" type="text" name='name' placeholder="Your Name..." />
            </div>
          </div>

          <div className="field">
            <label data-aos="fade-up" className="label">Email</label>
            <input data-aos="fade-up" className="input" type="email" name='email' placeholder="Your Email..." />
          </div>

          <div className="field">
            <label data-aos="fade-up" className="label">Message</label>
            <div className="control">
              <textarea
                data-aos="fade-up"
                className="textarea"
                placeholder="Leave a message..."
                name='message'
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}>
              </textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <button
              data-aos="fade-up"
              className="button is-link"
              value='Send' onClick={() =>
                alert('Email was sent')
              }>Submit</button>
          </div>

          <Links />

        </section>
      </form>
    </div>
  )
}

export default Contact
