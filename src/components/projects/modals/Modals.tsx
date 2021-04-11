import MobilePopup from './mobile-modal/MobileModal'
import DesktopPopup from './desktop-modal/DesktopModal'
import './modals.sass'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../../../App'

function Modals({ accessor, images, setActive }) {
  const [tech, setTech] = useState(false)
  const [details, setDetails] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width < 1130 && size.height < 800) {
      setDetails(false)
      setTech(false)
    }
  }, [size])

  return (
    <div className='popup-container'>
      <div className='active-overlay'
        onClick={() => setActive(false)}
      />

      <MobilePopup
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
