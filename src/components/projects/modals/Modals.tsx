import MobilePopup from './mobile-modal/MobileModal'
import DesktopPopup from './desktop-modal/DesktopModal'
import './modals.sass'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../../../App'

function Modals({ accessor, images, setActive, tech, setTech, details, setDetails, isAnimated, setIsAnimated }) {

  const size = useWindowSize()

  useEffect(() => {
    if (size.width < 1130 && size.height < 800) {
      setDetails(false)
      setTech(false)
    }
  }, [size])

  const closeModalHandler = () => {
    setIsAnimated(false)
    setTimeout(() => {
      setActive(false);
    }, 500)
  }


  return (
    <div className={isAnimated ? 'popup-container' : 'popup-container-off'}>
      <div className='active-overlay'
        onClick={closeModalHandler} />

      < MobilePopup
        images={images}
        accessor={accessor}
        tech={tech}
        setTech={setTech}
        setDetails={setDetails}
      />
      <DesktopPopup
        images={images}
        accessor={accessor}
        details={details}
        setDetails={setDetails}
        setTech={setTech}
      />
    </div >
  )
}

export default Modals
