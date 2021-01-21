import React from 'react'
import { Icon } from '../../../reusables/Icons'
import './proj-image.sass'

function ProjectImage({ projData, isActive, iconData }) {
  return (
    <div className='desktop-container'>
      <img src={projData.image} className='desktop-image' />
      <div className='icons-container' >
        <Icon iconData={iconData[0]} />
        <Icon iconData={iconData[1]} />
        <Icon iconData={iconData[2]} />
        <Icon iconData={iconData[3]} />
        <Icon iconData={iconData[4]} />
      </div>
      <div className={`shaded-box ${isActive ? 'shaded-active' : 'shaded-deactivate'}`}></div>
    </div>
  )
}

export default ProjectImage
