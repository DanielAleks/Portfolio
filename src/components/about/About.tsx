import React from 'react'
import './about.sass'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiNpm } from 'react-icons/di';
import { IoLogoSass } from 'react-icons/io';
import { SiRedux, SiReactrouter, SiTailwindcss, SiBulma, SiStyledComponents } from 'react-icons/si';
import { FaReact, FaYarn } from 'react-icons/fa';
import { SiExpo, SiJavascript } from 'react-icons/si';
import { SiNeovim } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { Icon, IconT } from '../../reusables/Icons';

function About() {

  const iconData = [
    AiFillHtml5, DiCss3, SiJavascript, FaReact, SiRedux, SiReactrouter,
    IoLogoSass, SiBulma, SiTailwindcss, SiStyledComponents, DiNpm, FaYarn,
    AiFillGithub, SiNeovim, SiExpo, CgFigma,
  ]

  return (
    <section id='about' className="about-section">
      <div className='about-container'>
        <p className='about-header'>About Me</p>
        <p className='about-desc'>
          I'm a Self-taught Front-End Developer in Spokane, Washington. After learning code from my brother, I became hooked, loving every bit of it. Up until I met javascript. I spent so much time
          trying to understand how a simple map worked or how to simply fetch data from an API. Fortunately, I passed over the hump and became a developer with skills beyond UI/UX design. Deciding
          not to go to college, programming has given me a second chance to make an impact on the world. Programming is my passion and a career that I couldn't be happier to pursue.
        </p >
      </div>

      <div className='icon-container'>
        {iconData.map((Item, id) =>
          <div data-aos="zoom-in"
            data-aos-delay={id * 50}
            className='icon-tech'>
            <Item size={30} color='#383838' />
          </div>
        )}
      </div>
    </section>
  )
}

export default About
