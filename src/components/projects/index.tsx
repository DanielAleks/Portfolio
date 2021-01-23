import React from 'react'
import Keyboard from '../../assets/images/keyboard.jpg'
import Paper from '../../assets/images/paper.jpg'
import { ProjectCard, ProjectCardT } from './proj-dynamic/ProjectDy'
import './projects.sass'
import './proj-dynamic/projDy.sass'

function Projects() {

  const projData: ProjectCardT[] = [
    {
      header: 'TodoList',
      text: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      image: Paper
    },
    {
      header: 'TodoList',
      text: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      image: Keyboard

    },
    {
      header: 'TodoList',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et exermodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      image: Keyboard
    },
    {
      header: 'TodoList',
      text: 'Lorem ipsum dolor sire uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      image: Keyboard
    },
  ]

  return (
    <section id='projects' className="section">
      <div className='project-container'>
        <p className='top-label'>Projects</p>


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
