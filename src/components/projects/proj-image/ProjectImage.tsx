import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../../../reusables/Icons'
import './proj-image.sass'

function ProjectImage({ projData, iconData }) {
  const [isActive, setIsActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div className='desktop-container'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={projData.image} className='desktop-image' />
      {hovered &&
        <div>
          <div className='icons-container'>
            <Icon iconData={iconData[0]} />
            <Icon iconData={iconData[1]} />
            <Icon iconData={iconData[2]} />
            <Icon iconData={iconData[3]} />
            <Icon iconData={iconData[4]} />
          </div>
          <div className={`shaded-box ${isActive ? 'shaded-active' : 'shaded-deactivate'}`}></div>
        </div>
      }
    </div>
  )
}

export default ProjectImage