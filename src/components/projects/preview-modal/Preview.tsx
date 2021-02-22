import React, { useState } from 'react'
import PreviewInfo from './prev-info/PreviewInfo'
import './preview.sass'

function Preview({ setIsPreview, item }) {
  const [main, setMain]: any = useState(item.mainImage)

  const Me: any = () => {
    if(main === 0) {
      return(item.mainImage)
    } else if(main === 1) {
      return(item.subImg1) 
    } else {
      return(item.subImg2)
    }
  }

  return (
    <div className='preview-container' >
      <div className='preview-outside-bg' onClick={() => setIsPreview(false)}></div>
      <div data-aos="fade-up" className='modal-bg'>
        <div className='preview-images-container'>
          <img src={main} className='preview-main-image' />
          <div className='image-gallary'>
            <img onClick={() => setMain(item.mainImage)} src={item.mainImage} />
            <img onClick={() => setMain(item.subImg1)} src={item.subImg1} />
            <img onClick={() => setMain(item.subImg2)} src={item.subImg2} />
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
