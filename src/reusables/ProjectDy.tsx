import React from 'react'

export interface ProjectCardT {
  header, text
}
export const ProjectCard = ({ projData }: { projData: ProjectCardT }) => {
  return (
    <div className='card-info'>
      <p className='proj-header'>{projData.header}</p>
      <p className='proj-text'>{projData.text} </p>
      <div className='info-buttons-container'>
      <button className="button-spacing button my-pink">Preview</button>
      <button className="button-spacing button my-gray">Visit Site</button>
      </div>
    </div>
  )
}