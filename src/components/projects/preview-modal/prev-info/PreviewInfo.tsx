import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { Icon } from '../../../../reusables/Icons'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { IoLogoSass } from 'react-icons/io'
import './prev-info.sass'
import { SiRedux, SiReactrouter, SiTailwindcss, SiBulma, SiStyledComponents } from 'react-icons/si';
import { DiCss3, DiNpm } from 'react-icons/di';
import { CgFigma } from 'react-icons/cg';
import { isDoStatement } from 'typescript'


function PreviewInfo({ setIsPreview, item }) {
  const md = 'hello'
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
                <Icon size={30} color='#383838' />
              )}
            </div>

          </div>

          <button data-aos="fade-left" data-aos-delay="300" className="prev-visit-button button my-gray">Visit Site</button>
        </div>
      </div>
    </div>
  )
}

export default PreviewInfo
