import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass } from 'react-icons/io'
import { SiRedux } from 'react-icons/si'
import { TiDelete } from 'react-icons/ti'
import Keyboard from '../../../assets/images/keyboard.jpg'
import { Icon, IconT } from '../../../reusables/Icons'
import './preview.sass'

function Preview({ setIsPreview }) {
  const iconData: IconT[] = [
    { icon: AiFillHtml5, iconStyle: 'icon-preview' },
    { icon: DiCss3, iconStyle: 'icon-preview' },
    { icon: IoLogoSass, iconStyle: 'icon-preview' },
    { icon: SiRedux, iconStyle: 'icon-preview' },
    { icon: FaReact, iconStyle: 'icon-preview' },
  ]

  return (
    <div className='preview-container'>
      <div className='preview-outside-bg' onClick={() => setIsPreview(false)}></div>
      <div className='modal-bg'>
        <img src={Keyboard} className='preview-main-image' />
        <div className='image-gallary'>
          <img src={Keyboard} />
          <img src={Keyboard} />
          <img src={Keyboard} />
        </div>

        <div className='info-prev-container'>
          <TiDelete 
          size={30} 
          color='#2e2e2e' 
          className='close-modal-x'
          onClick={() => setIsPreview(false)}
          />
          <div style={{ width: '80%' }}>

            <div>
              <p className='prev-header'>Description:</p>
              <p className='prev-description'>'Lorem ipsum m veniam, quis nostrud exercitation ullamco laborisamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'</p>
            </div>

            <div style={{ marginTop: 10 }}>
              <p className='prev-header'>Technologies:</p>
              <div className='icons-preview-container'>
                <Icon iconData={iconData[0]} />
                <Icon iconData={iconData[1]} />
                <Icon iconData={iconData[2]} />
                <Icon iconData={iconData[3]} />
                <Icon iconData={iconData[4]} />
              </div>
            </div>

            <button className="prev-visit-button button my-gray">Visit Site</button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
