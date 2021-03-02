import React from 'react'
import { ProjectCard } from './proj-dynamic/ProjectCard'
import './projects.sass'
import './proj-dynamic/proj-card.sass'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass, IoMdPhonePortrait } from 'react-icons/io'
import { SiBulma, SiReactrouter, SiStyledComponents } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import quickweather1 from '../../assets/images/quickweather1.png'
import quickweather2 from '../../assets/images/quickweather2.png'
import quickweather3 from '../../assets/images/quickweather3.png'
import wildlife1 from '../../assets/images/wildlife1.jpg'
import wildlife2 from '../../assets/images/wildlife2.jpg'
import wildlife3 from '../../assets/images/wildlife3.jpg'
import meditation1 from '../../assets/images/meditation1.jpg'
import meditation2 from '../../assets/images/meditation2.jpg'
import meditation3 from '../../assets/images/meditation3.jpg'

function Projects() {

  const projData: any = [
    {
      header: 'QuickWeather',
      desc: 'A simple weather app that keeps information on the weather up to date. Wanting to do more complex things with react, I fetched data from an API and focused on client-side functionality.',
      mainImage: quickweather1,
      subImg1: quickweather2,
      subImg2: quickweather3,
      link: 'https://daniel-aleksandrov-quickweather.netlify.app/',
      icons: [
        FaReact, SiBulma, IoLogoSass,
      ],
      category: 'Projects',
      action: [
        'visited QuickWeather', 'previewed QuickWeather'
      ]
    },
    {
      header: 'Wildlife Conservation',
      desc: 'List of endangered species that need our help. I used an animal conservation API. The API has since been removed and I had to add my own data, unfortunately.',
      mainImage: wildlife1,
      subImg1: wildlife2,
      subImg2: wildlife3,
      link: 'https://daniel-aleksandrov-wildlife-conservation.netlify.app/',
      icons: [
        FaReact, IoLogoSass, SiBulma, SiReactrouter,
      ],
      category: 'Projects',
      action: [
        'visited Wildlife Conservation', 'previewed Wildlife Conservation'
      ]
    },
    {
      header: 'Meditation',
      desc: 'Exhibits helpful meditations to the stressed. Primarily focused on UX design; responsiveness, simple animations with an animation library (AOS), and a little bit of React with a React carousel library.',
      mainImage: meditation1,
      subImg1: meditation2,
      subImg2: meditation3,
      link: 'https://daniel-aleksandrov-meditation.netlify.app/',
      icons: [
        FaReact, DiCss3, CgFigma, SiStyledComponents,
      ],
      category: 'Projects',
      action: [
        'visited Meditation', 'previewed Meditation'
      ]
    },
  ]

  return (
    <section id='projects' className="section proj-omni-container">
      <div className='project-container'>
        <p data-aos="fade-up" className='top-label'>Projects</p>

        <div className='proj-cards-container'>
          {projData.map((item) =>
            <div>
              <ProjectCard item={item} />
              <hr data-aos="fade-down" className='proj-hr' />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
