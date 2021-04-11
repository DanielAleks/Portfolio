import Jail from '../../../../../assets/images/portfolio/jailclear.png'
import Chest from '../../../../../assets/images/portfolio/chest.png'
import './community-chest.sass'
import { useWindowSize } from '../../../../../App'

function CommunityChest({ images, accessor, details, setDetails, setTech }) {
  const size = useWindowSize()

  const detailsHandler = () => {
    if (size.width < 1130 && size.height < 800) {
      setTech(false)
      setDetails(!details)
    } else
      setDetails(!details)
  }

  return (
    <div className={`'details-container' ${details ? 'details-show' : 'details-hide'}`}>
      <button onClick={detailsHandler} className='b-view-details'>
        <img src={Chest} />
        <p>Community Chest</p>
      </button>
      <div className='popup-details'>
        <img src={Jail} />
        <h1>{images[accessor].title}</h1>
        <p>{images[accessor].desc}</p>
      </div>
    </div>
  )
}

export default CommunityChest
