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

      <Scrollbars style={{ width: '100%', height: "100vh" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

          <ContactComponent />

          <div className='other-way-container'>
            <div className="other-way-card">
              <Link className="Link-other-way" to="/contact">
                <img src={Chance} />
                <p>Wrong Way?</p>
              </Link>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  )
}

export default AnotherWay
