import React, { useState } from 'react'
import { IoMdPhonePortrait } from 'react-icons/io'
import { MdDesktopWindows } from 'react-icons/md'
import Preview from '../preview-modal/Preview'
import './proj-info.sass'
import ReactGA from 'react-ga'

function ProjectInfo({ item, setIsPreview }) {

  const visitEventHandler = () => {
    ReactGA.event({
      category: item.category,
      action: item.action[0]
    });
  }

  const previewEventHandler = () => {
    ReactGA.event({
      category: item.category,
      action: item.action[1]
    });
  }

  const onClickHandler = () => {
    setIsPreview(true)
    previewEventHandler()
  }

  return (
    <div className='card-info'>
      <p data-aos="fade-left" className='proj-header'>{item.header}</p>
      <p data-aos="fade-left" className='proj-text'>{item.desc} </p>
      <div className='info-buttons-container'>
        <button data-aos="fade-up" className="button-spacing button my-pink" onClick={onClickHandler}>Preview</button>
        <a href={item.link} target="_blank">
          <button onClick={visitEventHandler} data-aos="fade-up" className="button-spacing button my-gray">Visit Site</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectInfo
