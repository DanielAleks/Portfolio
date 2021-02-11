import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../../../reusables/Icons'
import './proj-image.sass'

function ProjectImage({ isMobile, projData, iconData, hovered, setHovered }) {

  return (
    <div className='desktop-container'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={projData.image} className='desktop-image' />
        <div>
          <div className='icons-container'>
          {iconData.map((item) => 
            <Icon iconData={item} /> 
          )}
          </div>
          <div className={`shaded-box ${hovered ? 'shaded-active' : 'shaded-box'}`}></div>
        </div>
    </div>
  )
}

export default ProjectImage
