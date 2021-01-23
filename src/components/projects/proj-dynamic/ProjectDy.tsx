import React, { useState } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass, IoMdPhonePortrait } from 'react-icons/io'
import { MdDesktopWindows } from 'react-icons/md'
import { SiRedux } from 'react-icons/si'
import { Icon, IconT } from '../../../reusables/Icons'
import Preview from '../preview-modal/Preview'
import ProjectImage from '../proj-image/ProjectImage'
import ProjectInfo from '../proj-info/ProjectInfo'

export interface ProjectCardT {
  header, text, image?
}
export const ProjectCard = ({ projData }: { projData: ProjectCardT }) => {
  const [isPreview, setIsPreview] = useState(false)
  const [switchDevice, setSwitchDevice] = useState(false)

  const iconData: IconT[] = [
    { icon: AiFillHtml5, iconStyle: 'icon-proj' },
    { icon: DiCss3, iconStyle: 'icon-proj' },
    { icon: IoLogoSass, iconStyle: 'icon-proj' },
    { icon: SiRedux, iconStyle: 'icon-proj' },
    { icon: FaReact, iconStyle: 'icon-proj' },
  ]

  return (
    <div className='desktop-card'>
      <ProjectImage
        projData={projData}
        iconData={iconData}
      />

      <div className='device-container'>
        <MdDesktopWindows size={40} className='device-margin' onClick={() => setSwitchDevice(prev => !prev)} />
        <IoMdPhonePortrait size={40} className='device-margin' />
      </div>

      <ProjectInfo
        projData={projData}
        setIsPreview={setIsPreview}
      />

      {isPreview ?
        <Preview
          setIsPreview={setIsPreview}
        />
        : null}
    </div>
  )
}