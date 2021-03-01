import React from 'react'
import { TiDelete } from 'react-icons/ti'
import ReactGA from 'react-ga'

function PreviewInfo({ setIsPreview, item }) {

  const visitEventHandler = () => {
    ReactGA.event({
      category: item.category,
      action: item.action[0]
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
            <button onClick={visitEventHandler} data-aos="fade-left" data-aos-delay="300" className="prev-visit-button button my-gray">Visit Site</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PreviewInfo
