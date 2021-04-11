import React, { useState } from 'react'
import './bottom-modal.sass'
import HorzChance from './horz-chance/HorzChance'
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import HorzCommunityChest from './horz-community-chest/HorzCommunityChest'

function BottomModal({ images, accessor }) {
  const [x, setX] = useState<number>(10)

  const addX = () => setX(x + 40)
  const minusX = () => setX(x - 40)



  return (
    <div className='bottom-modal-container'>
      <div className='bottom-popup-container'>

        <div className="left-arrow" onClick={addX}>
          <AiOutlineLeftCircle size={50} />
        </div>
        <div className="right-arrow" onClick={minusX}>
          <AiOutlineRightCircle size={50} />
        </div>
        {images[accessor].desktop.map((item) =>
          <img style={{ transform: `translateX(${x}vw)` }} src={item} />
        )}
      </div>

      <HorzChance images={images} accessor={accessor} />
      <HorzCommunityChest images={images} accessor={accessor} />
    </div>
  )
}

export default BottomModal
