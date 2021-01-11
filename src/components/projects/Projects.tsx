import React from 'react'
import Keyboard from '../../assets/images/keyboard.jpg'
import { ProjectCard, ProjectCardT } from '../../reusables/ProjectDy'
import './projects.sass'

function Projects() {

  const projData: ProjectCardT[] = [
    {
      header: 'TodoList',
      text: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
    },
    {
      header: 'TodoList',
      text: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
    },
    {
      header: 'TodoList',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et exermodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
    },
    {
      header: 'TodoList',
      text: 'Lorem ipsum dolor sire uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
    },
  ]

  return (
    <section className="section">

      <div className='project-container'>
          <p className='top-label'>Projects</p>

        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div className='desktop-card'>
            <img className='desktop-image' src={Keyboard} />
            <ProjectCard projData={projData[0]} />
          </div>
          <hr className='proj-hr' />

          <div className='desktop-card'>
            <img className='desktop-image' src={Keyboard} />
            <ProjectCard projData={projData[1]} />
          </div>
          <hr className='proj-hr' />

          <div className='desktop-card'>
            <img className='desktop-image' src={Keyboard} />
            <ProjectCard projData={projData[2]} />
          </div>
          <hr className='proj-hr' />

          <div className='desktop-card'>
            <img className='desktop-image' src={Keyboard} />
            <ProjectCard projData={projData[3]} />
          </div>
          <hr className='proj-hr' />
        </div>

      </div>
    </section>
  )
}

export default Projects
