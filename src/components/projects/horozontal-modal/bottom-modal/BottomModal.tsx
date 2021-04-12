import React, { useState } from 'react'
import HorzChance from './horz-chance/HorzChance'
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import HorzCommunityChest from './horz-community-chest/HorzCommunityChest'
import Toggler from './toggler/Toggler'
import './bottom-modal.sass'

function BottomModal({ images, accessor, tech, setTech, details, setDetails }) {
  const [x, setX] = useState<number>(0)
  const [isM, setIsM] = useState(false)
  const [Z, setZ] = useState<number>(0)

  const addX = () => setX(x + 115)
  const minusX = () => setX(x - 115)

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
            style={{ transform: `translateX(${x}%)` }} src={item} />
        )}

      </div>

      <HorzChance
        tech={tech}
        setTech={setTech}
        images={images}
        accessor={accessor}
      />
      <HorzCommunityChest
        details={details}
        setDetails={setDetails}
        Z={Z} setZ={setZ}
        images={images}
        accessor={accessor} />
    </div>
  )
}

export default BottomModal
