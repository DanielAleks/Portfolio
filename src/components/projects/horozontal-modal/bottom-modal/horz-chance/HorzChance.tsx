import React, { useState } from 'react'
import Spaces from '../../../../../assets/images/portfolio/spaces3ClearResized.png'
import ChanceImg from '../../../../../assets/images/portfolio/chanceclear.png'
import './horz-chance.sass'

function HorzChance({ images, accessor }) {
  const [tech, setTech] = useState(false)

  return (
    <div className={`'h-view-tech-container' ${tech ? 'h-tech-show' : 'h-tech-hide'}`}>
      <div className='h-popup-tech'>
        <img className='h-tech-bg' src={Spaces} />
        <p>Technologies</p>
        {images[accessor].icons.map((item, id) =>
          <img className="h-tech-icons" src={item} />
        )}
      </div>

      <button onClick={() => setTech(!tech)} className='h-view-tech'>
        <img src={ChanceImg} />
        <p>Chance</p>
      </button>
    </div>
  )
}

export default HorzChance
