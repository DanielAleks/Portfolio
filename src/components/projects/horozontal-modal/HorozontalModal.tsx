import React from 'react'
import BottomModal from './bottom-modal/BottomModal'
import './horozontal-modal.sass'

function HorozontalModal({ accessor, images, setActive, tech, setTech, details, setDetails }) {
  return (
    <div className="horz-modal-container">
      <div className="active-overlay" onClick={() => setActive(false)} />

      <BottomModal
        tech={tech}
        setTech={setTech}
        details={details}
        setDetails={setDetails}
        images={images}
        accessor={accessor}
      />
    </div>
  )
}

export default HorozontalModal
