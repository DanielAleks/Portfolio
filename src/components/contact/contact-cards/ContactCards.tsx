import Boardwalk from '../../../assets/images/portfolio/boardwalk.jpg'
import PassGo from '../../../assets/images/portfolio/passGo.jpg'
import OutOfJail from '../../../assets/images/portfolio/outOfJail.jpg'
import Chance from '../../../assets/images/portfolio/chanceclear.png'
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import './contact-cards.sass'
import { useWindowSize } from '../../../App';
import ReactGA from 'react-ga'

function ContactCards() {
  const size = useWindowSize()

  const onGmailHandler = () => {
    ReactGA.event({
      category: 'Card Gmail',
      action: 'Card Gmail was clicked'
    });
  }

  const onGithubHandler = () => {
    ReactGA.event({
      category: 'Card Github',
      action: 'Card Github was clicked'
    });
  }

  const anotherWayHandler = () => {
    ReactGA.event({
      category: 'AnotherWay Clicked',
      action: 'Card AnotherWay was clicked'
    });
  }

  const GAHandler = (id) => {
    if (id === 1) {
      onGmailHandler()
    } else if (id === 2) {
      onGithubHandler()
    }
  }

  const card = [
    {
      image: Boardwalk,
      style: 'boardwalk-bg',
      title: 'Phone Number:',
      link: '(503)-997-4024',
      href: null
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

  const cardDelay = (id) => {
    if (id === 2) {
      return (0)
    } else if (id === 1) {
      return (.1)
    } else if (id === 0) {
      return (.2)
    }
  }

  return (
    <div className='contact-cards-container'>

      <Scrollbars style={{ width: '100vw', height: '100%' }}>
        <div className='cards-inner-container'>
          {card.map((item, id) => 
            <div style={{ animationDelay: `${cardDelay(id)}s` }} className="contact-information">
              <a onClick={() => GAHandler(id)} style={{ cursor: id === 0 ? 'auto' : 'pointer' }} href={item.href} target='_blank'>
                <img className={item.style} src={item.image} />
                <p>{item.title}</p>
                <p
                  style={{ textDecoration: id === 0 ? 'none' : 'underline' }} >{item.link}</p>
              </a>
            </div>
          )}

          <div className="another-way-card">
            <Link onClick={anotherWayHandler} className='Link-another-styles' to="another-way">
              <img src={Chance} />
              <p>Another Way</p>
            </Link>
          </div>
        </div>
      </Scrollbars>
    </div>
  )
}

export default ContactCards
