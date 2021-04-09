import React, { useState } from 'react'
import './info-modals.sass'

function InfoModals({ accessor, images }) {
  const [tech, setTech] = useState(false)
  const [details, setDetails] = useState(false)

  return (
    <>
      <button onClick={() => setDetails(!details)} className='button-more-info'>
        Community Chest
          </button>
      <button onClick={() => setTech(!tech)} className='button-view-tech'>
        Chance
          </button>

      <a href="google.com">
        <button className='button-visit-site'>Visit Site</button>
      </a>
      <a href="facebook.com">
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

      {details &&
        <div className='popup-info'>
          <h1>{images[accessor].title}</h1>
          <p>{images[accessor].desc}</p>
        </div>
      }
    </>
  )
}

export default InfoModals
