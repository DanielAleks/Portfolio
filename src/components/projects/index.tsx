import React from 'react'
import { ProjectCard } from './proj-dynamic/ProjectCard'
import './projects.sass'
import './proj-dynamic/proj-card.sass'
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
      desc: 'Wanting to do more complex things with react, I heard a weather app was filled with javascript and so I made a simple weather app based on when the weather is warm enough for the beach.',
      mainImage: beachweather1,
      subImg1: beachweather2,
      subImg2: beachweather3,
      link: 'https://daniel-aleksandrov-beachweather.netlify.app/',
      icons: [
        FaReact, SiBulma, IoLogoSass,
      ]
    },
    {
      header: 'Wildlife Conservation',
      desc: 'I wanted to learn how to fetch data and what way was better than to also emphasize the need to save wildlife. The API has since been removed and I had to add my own data unfortunately.',
      mainImage: wildlife1,
      subImg1: wildlife2,
      subImg2: wildlife3,
      link: 'https://daniel-aleksandrov-wildlife-conservation.netlify.app/',
      icons: [
        FaReact, IoLogoSass, SiBulma, SiReactrouter,
      ]
    },
    {
      header: 'Meditation',
      desc: 'A website that illistrates a few great meditations to the stressed. This project was a turning point to my UX design and javascript, every project before this looked terible and had no javascript.',
      mainImage: meditation1,
      subImg1: meditation2,
      subImg2: meditation3,
      link: 'https://daniel-aleksandrov-meditation.netlify.app/',
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
