import React from 'react'
import './intro.sass'

function Intro() {
  return (
    <div className='bg-image-cover'>
      <div className='intro-bg-image'></div>

      <div className="tile is-ancestor is-4 background card-container">
        <div className="tile is-parent">
          <article className="tile is-child notification bg-card-color">
            <p className="title">Successful Front-end Development</p>
            <p className="subtitle">Hi. I’m Ian, a freelance Front-end Developer with 12 years commercial experience creating successful websites.</p>
          </article>
        </div>
      </div>

    </div>
  )
}

export default Intro
