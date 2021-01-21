import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass } from 'react-icons/io'
import { SiRedux } from 'react-icons/si'
import { TiDelete } from 'react-icons/ti'
import Keyboard from '../../../assets/images/keyboard.jpg'
import { Icon, IconT } from '../../../reusables/Icons'
import PreviewInfo from './prev-info/PreviewInfo'
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

        <PreviewInfo
          iconData={iconData}
          setIsPreview={setIsPreview}
        />
      </div>
    </div>
  )
}

export default Preview
