import React from 'react'
import './about.sass'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiNpm } from 'react-icons/di';
import { IoLogoSass } from 'react-icons/io';
import { SiRedux, SiReactrouter, SiTailwindcss, SiBulma, SiStyledComponents } from 'react-icons/si';
import { FaReact, FaYarn } from 'react-icons/fa';
import { GiPapers } from 'react-icons/gi';
import { Icon, IconT } from '../../reusables/Icons';

function About() {

  const iconData: IconT[] = [
    { icon: AiFillHtml5, iconStyle: 'icon-tech' },
    { icon: AiFillGithub, iconStyle: 'icon-tech' },
    { icon: DiCss3, iconStyle: 'icon-tech' },
    { icon: DiNpm, iconStyle: 'icon-tech' },
    { icon: FaYarn, iconStyle: 'icon-tech' },
    { icon: IoLogoSass, iconStyle: 'icon-tech' },
    { icon: SiRedux, iconStyle: 'icon-tech' },
    { icon: SiReactrouter, iconStyle: 'icon-tech' },
    { icon: SiTailwindcss, iconStyle: 'icon-tech' },
    { icon: SiBulma, iconStyle: 'icon-tech' },
    { icon: SiStyledComponents, iconStyle: 'icon-tech' },
    { icon: FaReact, iconStyle: 'icon-tech' },
    { icon: GiPapers, iconStyle: 'icon-tech' },
  ]

  return (
    <section id='about' className="about-section">

      <div className='about-container'>
        <p className='about-header'>About Me</p>
        <p className='about-desc'>I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
      </div>

      <div className='icon-container'>
        <Icon iconData={iconData[0]} />
        <Icon iconData={iconData[1]} />
        <Icon iconData={iconData[2]} />
        <Icon iconData={iconData[3]} />
        <Icon iconData={iconData[4]} />
        <Icon iconData={iconData[5]} />
        <Icon iconData={iconData[6]} />
        <Icon iconData={iconData[7]} />
        <Icon iconData={iconData[8]} />
        <Icon iconData={iconData[9]} />
        <Icon iconData={iconData[10]} />
        <Icon iconData={iconData[11]} />
        <Icon iconData={iconData[12]} />
      </div>
    </section>
  )
}

export default About
