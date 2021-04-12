import PassGo from '../../../../assets/images/portfolio/passGoClear.png'
import Chance from './chance/Chance'
import { Scrollbars } from 'react-custom-scrollbars';
import './mobile-modal.sass'

function MobilePopup({ accessor, images, tech, setTech, setDetails, size }) {
  return (
    <div className='mobile-outer-popup-container'>
      <div className='mobile-popup-container'>
        <Scrollbars style={{ width: size.width > 1300 ? 260 : 210, height: "100%" }}>
          {images[accessor].mobile.map((item) =>
            <img className='mobile-popup-image' src={item} />
          )}
        </Scrollbars>
      </div>

      <a href={images[accessor].repo} target='_blank'>
        <button className='b-view-repo'>
          <img src={PassGo} />
          <p>View Repo</p>
        </button>
      </a>

      <Chance
        tech={tech}
        setTech={setTech}
        setDetails={setDetails}
        images={images}
        accessor={accessor}
      />
    </div>
  )
}

export default MobilePopup
