import PassGo from '../../../../assets/images/portfolio/passGoClear.png'
import Chance from './chance/Chance'
import './mobile-modal.sass'

function MobilePopup({ accessor, images, tech, setTech, setDetails }) {
  return (
    <div className='mobile-outer-popup-container'>
      <div className='mobile-popup-container'>
        {images[accessor].mobile.map((item) =>
          <img src={item} />
        )}
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
