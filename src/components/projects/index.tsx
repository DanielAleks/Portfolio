import React from 'react'
import Keyboard from '../../assets/images/keyboard.jpg'
import Paper from '../../assets/images/paper.jpg'
import { ProjectCard, ProjectCardT } from './proj-dynamic/ProjectDy'
import './projects.sass'
import './proj-dynamic/projDy.sass'

function Projects() {

  const projData: ProjectCardT[] = [
    {
      header: 'BeachWeather',
      text: 'I wanted to make something complex with react that both looked good and fetched a lot of data. I came up with a weather app, but a simple weather app would be boring and so I made it with a beach theme so that you will know what days you can and cannot go to the beach to play volleyball or surf.',
      image: Paper
    },
    {
      header: 'Wildlife Conservation',
      text: 'This project was where I wanted to make more than just a single paged project and so I used react navigation, then halfway I realized that I didnt have enough data to fetch to make a full second page and so I just made a modal explaining specific species and how they needed our help.',
      image: Keyboard

    },
    {
      header: 'Meditation',
      text: 'This project went through some of the basic html, css and javascript. Another create-react-app template. This was personally one of my most basic yet best because this was the first time I discovered on how much creativety gets poured into a good website. Before this, I was making very poorly and unexciting websites.',
      image: Paper
    },
  ]

  return (
    <section id='projects' className="section">
      <div className='project-container'>
        <p data-aos="fade-up" className='top-label'>Projects</p>

        <div className='proj-cards-container'>
          {projData.map((item) =>
            <div>
              <ProjectCard projData={item} />
              <hr className='proj-hr' />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
