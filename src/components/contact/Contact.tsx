import ContactCards from './contact-cards/ContactCards';
import ContactComponent from './ContactComponent';
import './contact.sass'

function Contact() {
  return (
    <div id='contact' className='ctt-container contactC'>

      <ContactCards />
      <p className='OR'>OR</p>
      <ContactComponent />
    </div>
  )
}

export default Contact
