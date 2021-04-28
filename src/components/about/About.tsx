import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import './about.sass'

function About() {

  const description = [
    'I am a Self-taught Front-End Developer in Spokane, Washington. Before becoming a developer. I was working as a Glazier assistant in The Windy City (Chicago). Deciding that a career of replacing glass or any, where I had to bag groceries and be valued as a mere penny was not for me. I went scouting for a career where I would be valued and work with a team that was ALIVE and excited to wake up every morning.',
    'That’s when I found a job posting for Front-end Developers. I did my research and became in love right away. Despite not having a degree from college, I knew that I would succeed. I had to make up for not going to college. So I learned every technology and framework that I felt was essential to become a developer. I had to stand out to get a job. I had no problem with that because now I had a purpose.',
    'A year later (today), I learned all the main frameworks and technologies, such as React, Vue, and Angular. As well as Typescript, Sass, Yarn, Figma, and Bootstrap (check “Technologies” for more). I love what I do and can’t wait to be working with a team as passionate and excited as me.'
  ]

  return (
    <section id='about' className="about-section">
      <div className="about-bg" />
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <div className='about-container'>
          <p className='about-header'>About Me</p>
          {description.map((item, id) =>
            <p className='about-desc' style={{ animationDelay: `${.05 * id}s` }} >{item}</p >
          )}
        </div>
      </Scrollbars>
    </section>
  )
}

export default About
