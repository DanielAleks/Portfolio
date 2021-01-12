import React from 'react'
import Keyboard from '../../assets/images/keyboard.jpg'
import Paper from '../../assets/images/paper.jpg'
import { ProjectCard, ProjectCardT } from './ProjectDy'
import { MdDesktopWindows } from 'react-icons/md';
import { IoMdPhonePortrait } from 'react-icons/io';
import './projects.sass'
import './proj-dy.sass'
import Preview from './Preview';

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
          <ProjectCard projData={projData[0]} />
          <hr className='proj-hr' />

          <ProjectCard projData={projData[1]} />
          <hr className='proj-hr' />

          <ProjectCard projData={projData[2]} />
          <hr className='proj-hr' />

          <ProjectCard projData={projData[3]} />
          <hr className='proj-hr' />
        </div>
      </div>

    </section>
  )
}

export default Projects
