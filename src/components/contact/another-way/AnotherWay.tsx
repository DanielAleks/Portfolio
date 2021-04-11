import ContactComponent from '../ContactComponent'
import { Link } from "react-router-dom";
import Chance from '../../../assets/images/portfolio/chanceclear.png'
import './another-way.sass'
import '../contact-cards/contact-cards.sass'

function AnotherWay() {
  return (
    <div className='another-way-container'>
      <ContactComponent />

      <Link to="/contact">
        <div className="other-way-card">
          <img src={Chance} />
          <p>Wrong Way?</p>
        </div>
      </Link>
    </div>
  )
}

export default AnotherWay
