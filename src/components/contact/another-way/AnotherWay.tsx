import ContactComponent from '../ContactComponent'
import { Link, useHistory } from "react-router-dom";
import Chance from '../../../assets/images/portfolio/chanceclear.png'
import './another-way.sass'
import '../contact-cards/contact-cards.sass'
import { useWindowSize } from '../../../App';
import { useEffect } from 'react';

function AnotherWay() {
  const size = useWindowSize()
  const history = useHistory()

  const goContact = () => history.push('/contact')
  const stayAnotherWay = () => history.push('/another-way')

  useEffect(() => {
    size.width > 1100 ? goContact() : stayAnotherWay()
  }, [size.width])

  return (
    <div className='another-way-container'>
      <ContactComponent />

      <div className="other-way-card">
        <Link className="Link-other-way" to="/contact">
          <img src={Chance} />
          <p>Wrong Way?</p>
        </Link>
      </div>
    </div>
  )
}

export default AnotherWay
