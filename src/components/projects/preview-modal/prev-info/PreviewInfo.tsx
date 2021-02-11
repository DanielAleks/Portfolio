import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { Icon } from '../../../../reusables/Icons'
import './prev-info.sass'

function PreviewInfo({ iconData, setIsPreview }) {
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
  )
}

export default PreviewInfo
