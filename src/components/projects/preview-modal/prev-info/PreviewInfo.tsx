import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { Icon } from '../../../../reusables/Icons'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass } from 'react-icons/io'
import { SiRedux } from 'react-icons/si'
import './prev-info.sass'

function PreviewInfo({ setIsPreview }) {

  const icons = [
    { icon: AiFillHtml5 }, { icon: DiCss3 }, { icon: IoLogoSass },
    { icon: SiRedux }, { icon: FaReact },
  ]

 
  return (
    <div className='info-prev-container'>
      <div className='prev-width'>
        <TiDelete
          size={30}
          color='#2e2e2e'
          className='close-modal-x'
          onClick={() => setIsPreview(false)}
        />
        <div className='info-width'>
          <div data-aos="fade-up">
            <p className='prev-header'>Description:</p>
            <p className='prev-description'>'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'</p>
          </div>

          <div data-aos="fade-up" style={{ marginTop: 10 }}>
            <p className='prev-header'>Technologies:</p>
            <div className='icons-preview-container'>
              {icons.map((item) =>
                <div className='icon-preview'>
                  <item.icon size={30} color='#383838' />
                </div>
              )}
            </div>
          </div>

          <button data-aos="fade-left" data-aos-delay="300" className="prev-visit-button button my-gray">Visit Site</button>
        </div>
      </div>
    </div>
  )
}

export default PreviewInfo
