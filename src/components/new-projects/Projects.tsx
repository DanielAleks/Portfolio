import React, { useState } from 'react'
import Meditation1D from '../../assets/images/meditation/desktop/meditation1.jpg'
import Meditation2D from '../../assets/images/meditation/desktop/meditation2.jpg'
import Meditation3D from '../../assets/images/meditation/desktop/meditation3.jpg'
import Meditation1M from '../../assets/images/meditation/mobile/meditation1.jpg'
import Meditation2M from '../../assets/images/meditation/mobile/meditation2.jpg'
import Meditation3M from '../../assets/images/meditation/mobile/meditation3.jpg'


import BBHomeD from '../../assets/images/blueberries/desktop/homeD.png'
import BBBenefitsD from '../../assets/images/blueberries/desktop/benefitsD.png'
import BBFreezingD from '../../assets/images/blueberries/desktop/freezingD.png'
import BBRecipesD from '../../assets/images/blueberries/desktop/recipesD.png'
import BBRecipesModalD from '../../assets/images/blueberries/desktop/recipesModalD.png'
import BBBenefitsM from '../../assets/images/blueberries/mobile/benefitsM.png'
import BBFreezingM from '../../assets/images/blueberries/mobile/freezingM.png'
import BBHomeM from '../../assets/images/blueberries/mobile/homeM.png'
import BBRecipesM from '../../assets/images/blueberries/mobile/recipesM.png'
import BBRecipesModalM from '../../assets/images/blueberries/mobile/recipesModalM.png'


import AfghanistanD from '../../assets/images/weather/desktop/afghanistanD.png'
import CaliD from '../../assets/images/weather/desktop/caliD.png'
import JapanD from '../../assets/images/weather/desktop/japanD.png'
import AfghanistanM from '../../assets/images/weather/mobile/afghanistanM.png'
import CaliM from '../../assets/images/weather/mobile/caliM.png'
import JapanM from '../../assets/images/weather/mobile/japanM.png'


import WLHomeD from '../../assets/images/wildlife/desktop/homeD.png'
import WLArticlesD from '../../assets/images/wildlife/desktop/articlesD.png'
import WLGalleryD from '../../assets/images/wildlife/desktop/galleryD.png'
import WLHomeBottomD from '../../assets/images/wildlife/desktop/homeBottomD.png'
import WLHomeM from '../../assets/images/wildlife/desktop/homeD.png'
import WLArticlesM from '../../assets/images/wildlife/desktop/articlesD.png'
import WLGalleryM from '../../assets/images/wildlife/desktop/galleryD.png'
import WLHomeBottomM from '../../assets/images/wildlife/desktop/homeBottomD.png'
import './projects.sass'

function Projects() {
  const [active, setActive] = useState(false)


  const images: any = [
    {
      main: Meditation1D,
      desktop: [Meditation1D, Meditation2D, Meditation3D],
      mobile: [Meditation1M, Meditation2M, Meditation3M]
    },
    {
      main: BBHomeD,
      desktop: [BBHomeD, BBBenefitsD, BBFreezingD, BBRecipesD, BBRecipesModalD],
      mobile: [BBHomeM, BBBenefitsM, BBFreezingM, BBRecipesM, BBRecipesModalM]
    },
    {
      main: JapanD,
      desktop: [JapanD, CaliD, AfghanistanD],
      mobile: [JapanM, CaliM, AfghanistanM]
    },
    {
      main: WLHomeD,
      desktop: [WLHomeD, WLArticlesD, WLGalleryD, WLHomeBottomD],
      mobile: [WLHomeM, WLArticlesM, WLGalleryM, WLHomeBottomM]
    },
  ]

  return (
    <div className="project-container">
      <div className='main-images'>
        {images.map((item) =>
          <img onClick={() => setActive(!active)} src={item.main} alt="image" />
        )}
      </div>

      {active &&
        <div className='active-overlay'
          onClick={() => setActive(false)}
        >

          <div className='desktop-popup-container'>
            {images.map((item) =>
              <img src={item.desktop} alt="image" />
            )}
          </div>

          <div className='mobile-popup-container'>
            {images.map((item) =>
              <img src={item.mobile} alt="image" />
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Projects
