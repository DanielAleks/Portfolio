import React from 'react'
import Keyboard from '../../../assets/images/keyboard.jpg'
import PreviewInfo from './prev-info/PreviewInfo'
import './preview.sass'

function Preview({ setIsPreview, item }) {
  return (
    <div className='preview-container' >
      <div className='preview-outside-bg' onClick={() => setIsPreview(false)}></div>
      <div data-aos="fade-up" className='modal-bg'>
        <div className='preview-images-container'>
          <img src={item.mainImage} className='preview-main-image' />
          <div className='image-gallary'>
            <img src={item.subImg1} />
            <img src={item.subImg2} />
          </div> 
        </div>

        <PreviewInfo
          setIsPreview={setIsPreview}
          item={item}
        />
      </div>
    </div>
  )
}

export default Preview
