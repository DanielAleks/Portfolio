import React, { useState } from 'react'
import Jail from '../../../../../assets/images/portfolio/jailclear.png'
import Chest from '../../../../../assets/images/portfolio/chest.png'
import './community-chest.sass'

function CommunityChest({ images, accessor }) {
  const [details, setDetails] = useState(true)

  return (
    <div className={`'details-container' ${details ? 'details-show' : 'details-hide'}`}>
      <button onClick={() => setDetails(!details)} className='b-view-details'>
        <img src={Chest} />
        <p>Community Chest</p>
      </button>
      <div className='popup-details'>
        <img src={Jail} />
        <h1>{images[accessor].title}</h1>
        <p>{images[accessor].desc}</p>
      </div>
    </div>
  )
}

export default CommunityChest
