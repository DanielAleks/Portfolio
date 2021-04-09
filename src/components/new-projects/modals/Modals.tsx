import React, { useState } from 'react'
import './modals.sass'

function Modals({ accessor, images, setActive }) {

  const [tech, setTech] = useState(false)
  const [details, setDetails] = useState(false)

  return (
    <div className='popup-container'>
      <div className='active-overlay'
        onClick={() => setActive(false)}
      />

      <div className='desktop-popup-container'>
        {images[accessor].desktop.map((item) =>
          <img src={item} />
        )}
      </div>

      <button onClick={() => setDetails(!details)} className='button-more-info'>
        Community Chest
          </button>
      <button onClick={() => setTech(!tech)} className='button-view-tech'>
        Chance
          </button>

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

      <div className='mobile-popup-container'>
        {images[accessor].mobile.map((item) =>
          <img src={item} />
        )}
      </div>
    </div>
  )
}

export default Modals
