import React, { useLayoutEffect, useEffect, useState } from 'react'
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
  const [hovered, setHovered] = useState(false)


  const iconData: IconT[] = [
    { icon: AiFillHtml5, iconStyle: `icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}` },
    { icon: DiCss3, iconStyle: `icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}` },
    { icon: IoLogoSass, iconStyle: `icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}` },
    { icon: SiRedux, iconStyle: `icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}` },
    { icon: FaReact, iconStyle: `icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}` },
  ]

  useEffect(() => {
    isPreview ?
      document.body.style.overflow = 'hidden'
      :
      document.body.style.overflow = 'unset'
  }, [isPreview]);

  return (
    <div className='desktop-card' style={{ overflowY: isPreview ? 'hidden' : 'auto' }}>
      <ProjectImage
        hovered={hovered}
        setHovered={setHovered}
        projData={projData}
        iconData={iconData}
      />

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
