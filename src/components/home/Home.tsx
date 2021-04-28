import React from 'react'
import './home.sass'

function Home() {

  const miniAbout = "Hi. I’m Daniel, a Front-end Developer that can code in any Framework and create awesome designs. If you're looking for someone that can write code in the front-end and still contribute with creative thinking and designing, I’m your guy. Check out “Projects” to see more of what I’ve created."
  return (
    <div className="home-container">

      <div className="red-dice-bg" />
      <div className="triangle-green-container" />

      <div className="home-green-container">
        <div>
          <h1>Front End Developer</h1>
          <p>{miniAbout}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
