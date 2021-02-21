import React from 'react'
import { ProjectCard } from './proj-dynamic/ProjectCard'
import './projects.sass'
import './proj-dynamic/projDy.sass'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass, IoMdPhonePortrait } from 'react-icons/io'
import { SiBulma, SiReactrouter, SiStyledComponents } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import beachweather1 from '../../assets/images/beachweather1.jpg'
import beachweather2 from '../../assets/images/beachweather2.jpg'
import beachweather3 from '../../assets/images/beachweather3.jpg'
import wildlife1 from '../../assets/images/wildlife1.jpg'
import wildlife2 from '../../assets/images/wildlife2.jpg'
import wildlife3 from '../../assets/images/wildlife3.jpg'
import meditation1 from '../../assets/images/meditation1.jpg'
import meditation2 from '../../assets/images/meditation2.jpg'
import meditation3 from '../../assets/images/meditation3.jpg'

function Projects() {

  const projData: any = [
    {
      header: 'BeachWeather',
      text: 'I wanted to make something complex with react that both looked good and fetched a lot of data. I came up with a weather app, but a simple weather app would be boring and so I made it with a beach theme so that you will know what days you can and cannot go to the beach to play volleyball or surf.',
      mainImage: beachweather1,
      subImg1: beachweather2,
      subImg2: beachweather3,
      desc: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      icons: [
        FaReact, SiBulma, IoLogoSass,
      ]
    },
    {
      header: 'Wildlife Conservation',
      text: 'This project was where I wanted to make more than just a single paged project and so I used react navigation, then halfway I realized that I didnt have enough data to fetch to make a full second page and so I just made a modal explaining specific species and how they needed our help.',
      mainImage: wildlife1,
      subImg1: wildlife2,
      subImg2: wildlife3,
      desc: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      icons: [
        FaReact, IoLogoSass, SiBulma, SiReactrouter,
      ]
    },
    {
      header: 'Meditation',
      text: 'This project went through some of the basic html, css and javascript. Another create-react-app template. This was personally one of my most basic yet best because this was the first time I discovered on how much creativety gets poured into a good website. Before this, I was making very poorly and unexciting websites.',
      mainImage: meditation1,
      subImg1: meditation2,
      subImg2: meditation3,
      desc: 'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      icons: [
        FaReact, DiCss3, CgFigma, SiStyledComponents,
      ]
    },
  ]

  return (
    <section id='projects' className="section">
      <div className='project-container'>
        <p data-aos="fade-up" className='top-label'>Projects</p>

        <div className='proj-cards-container'>
          {projData.map((item) =>
            <div>
              <ProjectCard item={item} />
              <hr data-aos="fade-right" data-aos-once='true' className='proj-hr' />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
