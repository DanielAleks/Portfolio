import React, { useState } from 'react'
import './mobile-modal.sass'

function MobilePopup({ accessor, images }) {
  const [tech, setTech] = useState(false)

  return (
    <div className='mobile-outer-popup-container'>
      <div className='mobile-popup-container'>
        {images[accessor].mobile.map((item) =>
          <img src={item} />
        )}
      </div>
      <a href={images[accessor].repo} target='_blank'>
        <button className='b-view-repo'>
          <p>View Repo</p>
        </button>
      </a>
      <div className={`'view-tech-container' ${tech ? 'tech-show' : 'tech-hide'}`}>
        <div className='popup-tech'>
          <p>Technologies</p>
          {images[accessor].icons.map((item, id) =>
            <img className="tech-icons" src={item} />
          )}
        </div>

        <button onClick={() => setTech(!tech)} className='b-view-tech'>
          <p>Chance</p>
        </button>
      </div>
    </div>
  )
}

export default MobilePopup
