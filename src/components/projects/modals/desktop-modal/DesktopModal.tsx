import Parking from '../../../../assets/images/portfolio/freeParkingClear.png'
import CommunityChest from './community-chest/CommunityChest'
import './desktop-modal.sass'

function DesktopPopup({ accessor, images, details, setDetails, setTech }) {
  return (
    <div className='desktop-outer-popup-container'>
      <div className='desktop-popup-container'>
        {images[accessor].desktop.map((item) =>
          <img src={item} />
        )}
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
