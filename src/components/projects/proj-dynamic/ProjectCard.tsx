import React, { useEffect, useState } from 'react'
import Preview from '../preview-modal/Preview'
import ProjectImage from '../proj-image/ProjectImage'
import ProjectInfo from '../proj-info/ProjectInfo'

export const ProjectCard = ({ item }) => {
  const [isPreview, setIsPreview] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPreview]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className='desktop-card'>
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
          isPreview={isPreview}
          setIsPreview={setIsPreview}
          item={item}
        />
        : null}
    </div>
  )
}
