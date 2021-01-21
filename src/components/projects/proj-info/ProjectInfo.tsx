import React, { useState } from 'react'
import { IoMdPhonePortrait } from 'react-icons/io'
import { MdDesktopWindows } from 'react-icons/md'
import Preview from '../preview-modal/Preview'
import './proj-info.sass'

function ProjectInfo({ projData, setIsPreview }) {

  return (
    <div className='card-info'>
      <p className='proj-header'>{projData.header}</p>
      <p className='proj-text'>{projData.text} </p>
      <div className='info-buttons-container'>
        <button className="button-spacing button my-pink" onClick={() => setIsPreview(true)}>Preview</button>
        <button className="button-spacing button my-gray">Visit Site</button>
      </div>
    </div>


  )
}

export default ProjectInfo
