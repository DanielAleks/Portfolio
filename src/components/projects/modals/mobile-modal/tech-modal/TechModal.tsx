import React, { useState } from 'react'
import Spaces from '../../../../../assets/images/portfolio/spaces3ClearResized.png'
import ChanceImg from '../../../../../assets/images/portfolio/chanceclear.png'
import './tech-modal.sass'
import { useWindowSize } from '../../../../../App'

function TechModal({ images, accessor, tech, setTech, setDetails }) {
  const size = useWindowSize()

  const techHandler = () => {
    if (size.width < 1130 && size.height < 800) {
      setTech(!tech)
      setDetails(false)
    } else
      setTech(!tech)
  }

  return (
    <div className={`'view-tech-container' ${tech ? 'tech-show' : 'tech-hide'}`}>
      <div className='popup-tech'>
        <p>Technologies</p>
        {images[accessor].icons.map((item, id) =>
          <img className="tech-icons" src={item} />
        )}
      </div>

      <button onClick={techHandler} className='b-view-tech'>
        <p>Tech</p>
      </button>
    </div>
  )
}

export default TechModal
