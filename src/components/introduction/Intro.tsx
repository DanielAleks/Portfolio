import './intro.sass'

function Intro() {
  return (
    <div className='bg-image-cover'>
      <div className='intro-bg-image'></div>

      <div className="tile is-ancestor is-4 background card-container">
        <div className="tile is-parent">
          <article className="tile is-child notification bg-card-color">
            <p className="title">Front-end Developer</p>
            <p className="subtitle">Hi. I’m Daniel, a Front-end Developer with proficient skills to make well designed websites with React.</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Intro
