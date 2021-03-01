import React from 'react'
import './about.sass'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiNpm, DiVim } from 'react-icons/di';
import { IoLogoSass } from 'react-icons/io';
import { SiRedux, SiReactrouter, SiTailwindcss, SiBulma, SiStyledComponents, SiTypescript } from 'react-icons/si';
import { FaReact, FaYarn } from 'react-icons/fa';
import { SiExpo, SiJavascript } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { Icon, IconT } from '../../reusables/Icons';

function About() {

  const iconData = [
    AiFillHtml5, DiCss3, SiJavascript, FaReact, SiTypescript, SiRedux,
    SiReactrouter, IoLogoSass, SiBulma, SiTailwindcss,
    SiStyledComponents, SiExpo, DiNpm, FaYarn, AiFillGithub, DiVim, CgFigma
  ]
 
  return (
    <section id='about' className="about-section">
      <div className='about-container'>
        <p className='about-header'>About Me</p>
        <p className='about-desc'>
          I am a Self-taught Front-End Developer in Spokane, Washington. After being introduced to programming by my brother, I have come to love the world of code. I began my journey with simple HTML and CSS, slowly honing in my UI/UX skill. Soon I came across javascript, wanting to give up on this ridiculous dream. I persisted, learning how to use arrays, maps, loops, and other fancy javascript. Eventually, it got easier and I began having fun again. I became a developer.
          Programming has given me a second chance to make an impact on the world. Programming is my passion and a career I couldn't be happier to pursue.
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
