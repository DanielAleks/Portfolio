import React from 'react'
import './about.sass'

function About() {

  const description = [
    `I am a Self-taught Front-End Developer in Spokane, Washington. After being introduced to programming by my brother, I have come to love the world of code.`,
    'I primarily work in React, Typescript, and Sass. I create websites that are both responsive and functional. I design and implement all the front-end into code.',
    'Craving to understand everything there is to front-end, I challenged myself and dove into Vue and Angular. To my surprise, both frameworks were a breeze. After keeping myself accountable and dedicating every hour to study, I became a Developer. I love what I do and hope that my websites can one day inspire other web developers.'

  ]

  return (
    <section id='about' className="about-section">
      <div className="about-bg" />
      <div className='about-container'>
        <p className='about-header'>About Me</p>
        {description.map((item) =>
            <p className='about-desc'>{"    " + item}</p >
        )}

      </div>
    </section>
  )
}

export default About
