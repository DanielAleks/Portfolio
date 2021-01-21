import React from 'react'
import './contact.sass'
import FooterDesign from './footer/FooterDesign'
import Links from './Links'

function Contact() {
  return (
    <div id='contact' className='ctt-container contactC'>

      <section className="ctt-width section">
        <p className='header'>Contact Me</p>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <button className="button is-link">Submit</button>
        </div>

        <Links />

      </section>

      <FooterDesign />
    </div>
  )
}

export default Contact
