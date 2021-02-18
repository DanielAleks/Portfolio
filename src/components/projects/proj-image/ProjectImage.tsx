import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../../../reusables/Icons'
import './proj-image.sass'

function ProjectImage({ projData, iconData, hovered, setHovered }) {

  return (
    <div data-aos="fade-right" className='desktop-container'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={projData.image} className='desktop-image' />
      <div>
        <div data-aos="fade-right" className='icons-container'>
          {iconData.map((item, id) =>
            <div style={{animationDelay: `${id * .01}s`}} className={`icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}`}>
              <item.icon size={30} color='#383838' />
            </div>
          )}
        </div>
        <div className={`shaded-box ${hovered ? 'shaded-active' : 'shaded-box'}`}></div>
      </div>
    </div>
  )
}

export default ProjectImage
