import React, { useState } from 'react'
import Spaces from '../../../../../assets/images/portfolio/spaces3ClearResized.png'
import ChanceImg from '../../../../../assets/images/portfolio/chanceclear.png'
import './chance.sass'

function Chance({images, accessor}) {
  const [tech, setTech] = useState(false)

  return (
    <div className={`'view-tech-container' ${tech ? 'tech-show' : 'tech-hide'}`}>
      <div className='popup-tech'>
        <img className='tech-bg' src={Spaces} />
        <p>Technologies</p>
        {images[accessor].icons.map((item, id) =>
          <img className="tech-icons" src={item} />
        )}
      </div>

      <button onClick={() => setTech(!tech)} className='b-view-tech'>
        <img src={ChanceImg} />
        <p>Chance</p>
      </button>
    </div>
  )
}

export default Chance
