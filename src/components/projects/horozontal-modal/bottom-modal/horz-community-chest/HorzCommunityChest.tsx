import React, { useState } from 'react'
import Chest from '../../../../../assets/images/portfolio/chestClear.png'
import Jail from '../../../../../assets/images/portfolio/jailclear.png'
import './horz-community-chest.sass'

function HorzCommunityChest({ images, accessor }) {
  const [details, setDetails] = useState(false)

  return (
    <div className={`'h-details-container' ${details ? 'h-details-show' : 'h-details-hide'}`}>
      <button onClick={() => setDetails(!details)} className='hb-view-details'>
        <img src={Chest} />
        <p>Community Chest</p>
      </button>
      <div className='h-popup-details'>
        <img src={Jail} />
        <h1>{images[accessor].title}</h1>
        <p>{images[accessor].desc}</p>
        <a href={images[accessor].website}>
          <button>Visit Site</button>
        </a>
      </div>
    </div>
  )
}

export default HorzCommunityChest
