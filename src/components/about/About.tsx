import React from 'react'
import './about.sass'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiNpm } from 'react-icons/di';
import { IoLogoSass } from 'react-icons/io';
import { SiRedux, SiReactrouter, SiTailwindcss, SiBulma, SiStyledComponents } from 'react-icons/si';
import { FaReact, FaYarn } from 'react-icons/fa';
import { SiExpo, SiJavascript } from 'react-icons/si';
import { GiPapers } from 'react-icons/gi';
import { SiNeovim } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { Icon, IconT } from '../../reusables/Icons';

function About() {

  const iconData = [
    { icon: AiFillHtml5 }, { icon: DiCss3 }, { icon: SiJavascript },
    { icon: FaReact }, { icon: SiRedux }, { icon: SiReactrouter },
    { icon: IoLogoSass }, { icon: SiBulma }, { icon: SiTailwindcss },
    { icon: SiStyledComponents }, { icon: DiNpm }, { icon: FaYarn },
    { icon: AiFillGithub }, { icon: SiNeovim }, { icon: SiExpo },
    { icon: CgFigma },
  ]

  return (
    <section id='about' className="about-section">
      <div className='about-container'>
        <p className='about-header'>About Me</p>
        <p className='about-desc'>
          <p className="about-desc" style={{ animationDelay: '.1s' }}>
            I'm a Self taught Front-End Developer in Spokane, Washington.
          </p>
          <p className="about-desc" style={{ animationDelay: '.2s' }}>
            I have serious passion for programming and creating
          </p>
          <p className="about-desc" style={{ animationDelay: '.3s' }}> 
            beautiful websites with react and sass and will love to go into
          </p>
          <p className="about-desc" style={{ animationDelay: '.4s' }}>
            backend to become a Mern fullstack developer someday.
          </p>
        </p>
      </div>

      <div className='icon-container'>
        {iconData.map((item, id) =>
          <div data-aos="zoom-in"
            data-aos-delay={id * 50}
            className='icon-tech'>
            <item.icon size={30} color='#383838' />
          </div>
        )}
      </div>
    </section>
  )
}

export default About
