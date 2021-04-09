import React, { useState } from 'react'
import './info-modals.sass'

function InfoModals({ accessor, images }) {
  const [tech, setTech] = useState(false)
  const [details, setDetails] = useState(false)

  return (
    <>
      <div className={ details ? 'ativate-blue':'details-popup-container' }>
        <button onClick={() => setDetails(!details)} className='fornowButton'>
          <p>Community Chest</p>
        </button>
        <div className='popup-info'>
          <h1>{images[accessor].title}</h1>
          <p>{images[accessor].desc}</p>
        </div>
      </div>














      <button onClick={() => setTech(!tech)} className='button-view-tech'>
        Chance
          </button>

      <a href={images[accessor].website} target='_blank'>
        <button className='button-visit-site'>Visit Site</button>
      </a>
      <a href={images[accessor].repo} target='_blank'>
        <button className='button-view-repo'>View Repo</button>
      </a>

      {tech &&
        <div className='popup-tech'>
          <p>Technologies</p>
          {images[accessor].icons.map((item, id) =>
            <img className="tech-icons1" src={item} />
          )}
        </div>
      }


    </>
  )
}

export default InfoModals
