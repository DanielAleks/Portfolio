import React, { useState } from 'react'
import Spaces from '../../../../../assets/images/portfolio/spaces3ClearResized.png'
import ChanceImg from '../../../../../assets/images/portfolio/chanceclear.png'
import './chance.sass'
import { useWindowSize } from '../../../../../App'

function Chance({ images, accessor, tech, setTech, setDetails }) {
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
        <img className='tech-bg' src={Spaces} />
        <p>Technologies</p>
        {images[accessor].icons.map((item, id) =>
          <img className="tech-icons" src={item} />
        )}
      </div>

      <button onClick={techHandler} className='b-view-tech'>
        <img src={ChanceImg} />
        <p>Chance</p>
      </button>
    </div>
  )
}

export default Chance