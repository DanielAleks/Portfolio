import React from 'react'
import { TiDelete } from 'react-icons/ti'
import './prev-info.sass'
import ReactGA from 'react-ga'

function PreviewInfo({ setIsPreview, item }) {

  const onVisitHandler = () => {
    ReactGA.event({
      category: item.category[1],
      action: item.action
    });
  }

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
            <p className='prev-description'>{item.desc}</p>
          </div>

          <div data-aos="fade-up" style={{ marginTop: 10 }}>
            <p className='prev-header'>Technologies:</p>
            <div className='icons-preview-container'> 
              {item.icons.map((Icon) =>
                  <Icon className='preview-icon' size={30} color='#373737' />
              )}
            </div>
          </div>

          <a href={item.link} target='_blank'>
            <button onClick={onVisitHandler} className="prev-visit-button button my-gray" 
            data-aos="fade-left" data-aos-delay="300">Visit Site</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PreviewInfo
