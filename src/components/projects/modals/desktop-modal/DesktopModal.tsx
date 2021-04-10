import React, { useState } from 'react'
import './desktop-modal.sass'

function DesktopPopup({ accessor, images }) {
  const [details, setDetails] = useState(true)

  return (
    <div className='desktop-outer-popup-container'>
      <div className='desktop-popup-container'>
        {images[accessor].desktop.map((item) =>
          <img src={item} />
        )}
      </div>

      <a href={images[accessor].website} target='_blank'>
        <button className='b-visit-site'>
          <p>Visit Site</p>
        </button>
      </a>

      <div className={`'details-container' ${details ? 'details-show' : 'details-hide'}`}>


        <button onClick={() => setDetails(!details)} className='b-view-details'>
          <p>Community Chest</p>
        </button>
        <div className='popup-details'>
          <h1>{images[accessor].title}</h1>
          <p>{images[accessor].desc}</p>
        </div>
      </div>
    </div>
  )
}

export default DesktopPopup
