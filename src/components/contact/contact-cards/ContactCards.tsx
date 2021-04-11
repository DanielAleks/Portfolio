import Boardwalk from '../../../assets/images/portfolio/boardwalk.jpg'
import PassGo from '../../../assets/images/portfolio/passGo.jpg'
import OutOfJail from '../../../assets/images/portfolio/outOfJail.jpg'
import Chance from '../../../assets/images/portfolio/chanceclear.png'
import { Link } from "react-router-dom";
import './contact-cards.sass'

function ContactCards() {

  const card = [
    {
      image: Boardwalk,
      style: 'boardwalk-bg',
      title: 'Phone Number:',
      link: '(503)-997-4024',
      href: '(503)-997-4024'
    },
    {
      image: PassGo,
      style: 'pass-go-bg',
      title: 'Gmail:',
      link: 'daniel.aleksandrov73',
      href: 'https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73'
    },
    {
      image: OutOfJail,
      style: 'jail-free-bg',
      title: 'Github:',
      link: 'DanielAleks',
      href: 'https://github.com/DanielAleks'
    },
  ]

  return (
    <div className='contact-cards-container'>

      <div className='cards-inner-container'>
        {card.map((item, id) =>
          <a style={{ cursor: id === 0 ? 'auto' : 'pointer' }} href={item.href} target='_blank'>
            <div className="contact-information">
              <img className={item.style} src={item.image} />
              <p>{item.title}</p>
              <p
                style={{ textDecoration: id === 0 ? 'none' : 'underline' }} >{item.link}</p>
            </div>
          </a>
        )}
      </div>


      <Link to="another-way">
        <div className="another-way-card">
          <img src={Chance} />
          <p>Another Way</p>
        </div>
      </Link>

    </div>
  )
}

export default ContactCards