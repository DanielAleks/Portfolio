import React, { useState } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass, IoMdPhonePortrait } from 'react-icons/io'
import { MdDesktopWindows } from 'react-icons/md'
import { SiRedux } from 'react-icons/si'
import { Icon, IconT } from '../../reusables/Icons'
import Preview from './preview-modal/Preview'

export interface ProjectCardT {
  header, text, image?
}
export const ProjectCard = ({ projData }: { projData: ProjectCardT }) => {
  const [isActive, setIsActive] = useState(false)
  const [isPreview, setIsPreview] = useState(false)

  const iconData: IconT[] = [
    { icon: AiFillHtml5, iconStyle: 'icon-proj' },
    { icon: DiCss3, iconStyle: 'icon-proj' },
    { icon: IoLogoSass, iconStyle: 'icon-proj' },
    { icon: SiRedux, iconStyle: 'icon-proj' },
    { icon: FaReact, iconStyle: 'icon-proj' },
  ]

  return (
    <div className='desktop-card'>
      <div className='desktop-container'>
        <img src={projData.image} className='desktop-image' />
        {/* <div className='icons-container' >
          <Icon iconData={iconData[0]} />
          <Icon iconData={iconData[1]} />
          <Icon iconData={iconData[2]} />
          <Icon iconData={iconData[3]} />
          <Icon iconData={iconData[4]} />
        </div> */}
        <div className={`shaded-box ${isActive ? 'shaded-active' : 'shaded-deactivate'}`}></div>
      </div>
      
      <div className='device-container'>
        <MdDesktopWindows size={40} className='device-margin' onClick={() => setIsActive(prev => !prev)} />
        <IoMdPhonePortrait size={40} className='device-margin' />
      </div>
      <div className='card-info'>
        <p className='proj-header'>{projData.header}</p>
        <p className='proj-text'>{projData.text} </p>
        <div className='info-buttons-container'>
          <button className="button-spacing button my-pink" onClick={() => setIsPreview(true)}>Preview</button>
          <button className="button-spacing button my-gray">Visit Site</button>
        </div>
      </div>

      {isPreview ?
        <Preview setIsPreview={setIsPreview} />
        : null}
    </div>
  )
}