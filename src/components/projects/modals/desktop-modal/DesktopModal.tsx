import Parking from '../../../../assets/images/portfolio/freeParkingClear.png'
import CommunityChest from './community-chest/CommunityChest'
import { Scrollbars } from 'react-custom-scrollbars';
import './desktop-modal.sass'

function DesktopPopup({ accessor, images, details, setDetails, setTech, size }) {
  return (
    <div className='desktop-outer-popup-container'>
      <div className='desktop-popup-container'>
        <Scrollbars style={{ width: size.width > 1300 ? 460 : 395, height: "100%" }}>
          {images[accessor].desktop.map((item, id) =>
            <img style={{ animationDelay: `${id * .1}s` }} src={item} />
          )}
        </Scrollbars>
      </div>

      <a href={images[accessor].website} target='_blank'>
        <button className='b-visit-site'>
          <img src={Parking} />
          <p>Visit Site</p>
        </button>
      </a>

      <CommunityChest
        images={images}
        accessor={accessor}
        details={details}
        setDetails={setDetails}
        setTech={setTech}
      />
    </div>
  )
}

export default DesktopPopup
