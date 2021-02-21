import React, { useEffect, useState } from 'react'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass, IoMdPhonePortrait } from 'react-icons/io'
import { SiBulma, SiReactrouter, SiStyledComponents } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import Preview from '../preview-modal/Preview'
import ProjectImage from '../proj-image/ProjectImage'
import ProjectInfo from '../proj-info/ProjectInfo'
import beachweather1 from '../../../assets/images/beachweather1.jpg'
import beachweather2 from '../../../assets/images/beachweather2.jpg'
import beachweather3 from '../../../assets/images/beachweather3.jpg'
import wildlife1 from '../../../assets/images/wildlife1.jpg'
import wildlife2 from '../../../assets/images/wildlife2.jpg'
import wildlife3 from '../../../assets/images/wildlife3.jpg'
import meditation1 from '../../../assets/images/meditation1.jpg'
import meditation2 from '../../../assets/images/meditation2.jpg'
import meditation3 from '../../../assets/images/meditation3.jpg'

export const ProjectCard = ({ item }) => {
  const [isPreview, setIsPreview] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    isPreview ?
      document.body.style.overflow = 'hidden'
      :
      document.body.style.overflow = 'unset'
  }, [isPreview]);

  return (
    <div className='desktop-card' style={{ overflowY: 'hidden' }}>
      <ProjectImage
        hovered={hovered}
        setHovered={setHovered}
        item={item}
      />

      <ProjectInfo
        item={item}
        setIsPreview={setIsPreview}
      />

      {isPreview ?
        <Preview
          setIsPreview={setIsPreview}
          item={item}
        />
        : null}
    </div>
  )
}
