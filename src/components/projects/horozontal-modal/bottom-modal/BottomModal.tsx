import React, { useState } from 'react'
import HorzChance from './horz-chance/HorzChance'
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import HorzCommunityChest from './horz-community-chest/HorzCommunityChest'
import Toggler from './toggler/Toggler'
import './bottom-modal.sass'

function BottomModal({ images, accessor }) {
  const [x, setX] = useState<number>(10)
  const [isM, setIsM] = useState(false)
  const [Z, setZ] = useState(0)

  const addX = () => setX(x + 40)
  const minusX = () => setX(x - 40)

  return (
    <div className='bottom-modal-container'>
      <div className='bottom-popup-container'>

        <Toggler isM={isM} setIsM={setIsM} />

        {!isM &&
          <>
            <div className="left-arrow" onClick={addX}>
              <AiOutlineLeftCircle size={50} />
            </div>
            <div className="right-arrow" onClick={minusX}>
              <AiOutlineRightCircle size={50} />
            </div>
          </>
        }
        {isM && images[accessor].mobile.map((item) =>
          <img className="mobile-image" src={item} />
        )}
        {!isM && images[accessor].desktop.map((item) =>
          <img className="desktop-image"
            style={{ transform: `translateX(${x}vw)` }} src={item} />
        )}

      </div>

      <HorzChance images={images} accessor={accessor} />
      <HorzCommunityChest
        Z={Z} setZ={setZ}
        images={images}
        accessor={accessor} />
    </div>
  )
}

export default BottomModal
