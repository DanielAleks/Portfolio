import React from 'react'
import Keyboard from '../../../assets/images/keyboard.jpg'
import PreviewInfo from './prev-info/PreviewInfo'
import './preview.sass'

function Preview({ setIsPreview }) {
  return (
    <div className='preview-container' >
      <div className='preview-outside-bg' onClick={() => setIsPreview(false)}></div>
      <div data-aos="fade-up" className='modal-bg'>
        <div className='preview-images-container'>
          <img src={Keyboard} className='preview-main-image' />
          <div className='image-gallary'>
            <img src={Keyboard} />
            <img src={Keyboard} />
            <img src={Keyboard} />
          </div> 
        </div>

        <PreviewInfo
          setIsPreview={setIsPreview}
        />
      </div>
    </div>
  )
}

export default Preview
