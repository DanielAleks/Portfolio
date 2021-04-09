import InfoModals from './info-modals/InfoModals'
import './modals.sass'

function Modals({ accessor, images, setActive }) {
  return (
    <div className='popup-container'>
      <div className='active-overlay'
        onClick={() => setActive(false)}
      />

      <div className='desktop-popup-container'>
        {images[accessor].desktop.map((item) =>
          <img src={item} />
        )}
      </div>

      <InfoModals accessor={accessor} images={images} />

      <div className='mobile-popup-container'>
        {images[accessor].mobile.map((item) =>
          <img src={item} />
        )}
      </div>
    </div>
  )
}

export default Modals
