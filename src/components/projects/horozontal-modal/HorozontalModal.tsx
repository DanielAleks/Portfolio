import React from 'react'
import BottomModal from './bottom-modal/BottomModal'
import './horozontal-modal.sass'

function HorozontalModal({ accessor, images, setActive }) {
  return (
    <div className="horz-modal-container">
      <div className="active-overlay" onClick={() => setActive(false)} />

      <BottomModal images={images} accessor={accessor} />
    </div>
  )
}

export default HorozontalModal
