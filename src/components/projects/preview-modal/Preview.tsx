import React, { useEffect, useState } from 'react'
import PreviewInfo from './prev-info/PreviewInfo'
import './preview.sass'

function Preview({ isPreview, setIsPreview, item }) {
  const [main, setMain]: any = useState(item.mainImage)

  useEffect(() => {
    if (isPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPreview]);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return ()=> document.body.style.overflow = 'auto';
 }, []);

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
