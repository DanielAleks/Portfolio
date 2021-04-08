import React from 'react'
import './technologies.sass'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiNpm, DiVim } from 'react-icons/di';
import { IoLogoSass } from 'react-icons/io';
import { SiRedux, SiReactrouter, SiTailwindcss, SiBulma, SiStyledComponents, SiTypescript } from 'react-icons/si';
import { FaReact, FaYarn } from 'react-icons/fa';
import { SiExpo, SiJavascript } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { Icon, IconT } from '../../reusables/Icons';

function Technologies() {

  const iconData = [
    AiFillHtml5, DiCss3, SiJavascript, FaReact, SiTypescript, SiRedux,
    SiReactrouter, IoLogoSass, SiBulma, SiTailwindcss,
    SiStyledComponents, SiExpo, DiNpm, FaYarn, AiFillGithub, DiVim, CgFigma
  ]

  return (
    <div className='tech-container'>
      {iconData.map((Item, id) =>
        <div data-aos="zoom-in"
          data-aos-delay={id * 50}
          className='icon-tech'>
          <Item size={30} color='#383838' />
        </div>
      )}
      <h1>hielo</h1>
    </div>
  )
}

export default Technologies
