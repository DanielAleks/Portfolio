import React from 'react'
import './proj-image.sass'

function ProjectImage({ item, hovered, setHovered }) {
  return (
    <div data-aos="fade-right" className='desktop-container'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={item.mainImage} className='desktop-image' />
      <div>
        <div data-aos="fade-right" className='icons-container'>

          {item.icons.map((Iitem) =>
            <div className={`icon-proj ${hovered ? 'icon-proj-active' : 'icon-proj'}`}>
              <Iitem size={30} color='#373737' />
            </div>
          )}

        </div>
        <div className={`shaded-box ${hovered ? 'shaded-active' : 'shaded-box'}`}></div>
      </div>
    </div >
  )
}

export default ProjectImage
