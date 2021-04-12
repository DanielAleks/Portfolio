import ContactCards from './contact-cards/ContactCards';
import ContactComponent from './ContactComponent';
import { Scrollbars } from 'react-custom-scrollbars';
import './contact.sass'

function Contact() {
  return (
    <div id='contact' className='ctt-container'>


        <ContactCards />

        <div className='contact-form-900px-cancel'>
          <p className='OR'>OR</p>
          <ContactComponent />
        </div>
    </div>
  )
}

export default Contact
