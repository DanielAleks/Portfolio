import MobilePopup from './mobile-modal/MobileModal'
import DesktopPopup from './desktop-modal/DesktopModal'
import './modals.sass'

function Modals({ accessor, images, setActive }) {
  return (
    <div className='popup-container'>
      <div className='active-overlay'
        onClick={() => setActive(false)}
      />

      <MobilePopup
        images={images} 
        accessor={accessor}
      />
      <DesktopPopup 
        images={images}
        accessor={accessor}
      /> 
    </div >
  )
}

export default Modals
