import ContactComponent from '../ContactComponent'
import { Link, useHistory } from "react-router-dom";
import Chance from '../../../assets/images/portfolio/chanceclear.png'
import { Scrollbars } from 'react-custom-scrollbars';
import { useEffect } from 'react';
import { useWindowSize } from '../../../App';
import '../contact-cards/contact-cards.sass'
import './another-way.sass'

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
      <Scrollbars style={{ width: 500, height: "100%" }}>
        <ContactComponent />

        <div className="other-way-card">
          <Link className="Link-other-way" to="/contact">
            <img src={Chance} />
            <p>Wrong Way?</p>
          </Link>
        </div>
      </Scrollbars>
    </div>
  )
}

export default AnotherWay
