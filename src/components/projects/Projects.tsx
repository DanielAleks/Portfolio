import React, { useState } from 'react'
import Meditation1D from '../../assets/images/meditation/desktop/meditation1.jpg'
import Meditation2D from '../../assets/images/meditation/desktop/meditation2.jpg'
import Meditation3D from '../../assets/images/meditation/desktop/meditation3.jpg'
import Meditation1M from '../../assets/images/meditation/mobile/meditation1.png'
import Meditation2M from '../../assets/images/meditation/mobile/meditation2.png'
import Meditation3M from '../../assets/images/meditation/mobile/meditation3.png'


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
import WLHomeM from '../../assets/images/wildlife/mobile/homeM.png'
import WLArticlesM from '../../assets/images/wildlife/mobile/articlesM.png'
import WLGalleryM from '../../assets/images/wildlife/mobile/galleryM.png'
import WLHomeBottomM from '../../assets/images/wildlife/mobile/homeBottomM.png'


import ReactLogo from '../../assets/images/icons/react-Logo.png'
import VueLogo from '../../assets/images/icons/vue.png'
import AngularLogo from '../../assets/images/icons/angular.png'
import Sass from '../../assets/images/icons/sassLogo.png'
import Figma from '../../assets/images/icons/Figma.png'
import StyledC from '../../assets/images/icons/styled-Components.png'
import Css from '../../assets/images/icons/css.png'
import Spring from '../../assets/images/icons/react-spring.png'

import './projects.sass'
import Modals from './modals/Modals'
import HorozontalModal from './horozontal-modal/HorozontalModal'
import { useWindowSize } from '../../App'

const images: any = [
  {
    main: JapanD,
    desktop: [JapanD, CaliD, AfghanistanD],
    mobile: [JapanM, CaliM, AfghanistanM],
    title: 'QuickWeather',
    desc: 'A simple weather app that keeps information on the weather up to date. Wanting to do more complex things with react, I fetched data from an API and focused on client-side functionality.',
    icons: [Sass, ReactLogo, Figma],
    website: 'https://daniel-aleksandrov-quickweather.netlify.app/',
    repo: 'https://github.com/DanielAleks/weather-app'
  },
  {
    main: WLHomeD,
    desktop: [WLHomeD, WLHomeBottomD, WLArticlesD, WLGalleryD],
    mobile: [WLHomeM, WLHomeBottomM, WLArticlesM, WLGalleryM],
    title: 'Save Wildlife',
    desc: 'List of endangered species that need our help. I used an animal conservation API. The API has since been removed and I had to add my own data, unfortunately.',
    icons: [Sass, ReactLogo, Figma, Spring],
    website: 'https://daniel-aleksandrov-savewildlife.netlify.app/',
    repo: 'https://github.com/DanielAleks/save-wildlife'
  },
  {
    main: BBHomeD,
    desktop: [BBHomeD, BBRecipesD, BBFreezingD, BBBenefitsD, BBRecipesModalD],
    mobile: [BBHomeM, BBRecipesM, BBFreezingM, BBBenefitsM, BBRecipesModalM],
    title: 'Blueberry Tribute',
    desc: 'A tribute to the most glorious and yummiest fruit out there! Displays a few recipes made with blueberries, instructions on how to freeze blueberries properly, and the health benefits of them.',
    icons: [Sass, VueLogo, Figma],
    website: 'https://daniel-aleksandrov-blueberrytribute.netlify.app/',
    repo: 'https://github.com/DanielAleks/Blueberry-Tribute'
  },
  {
    main: Meditation1D,
    desktop: [Meditation1D, Meditation2D, Meditation3D],
    mobile: [Meditation1M, Meditation2M, Meditation3M],
    title: 'Meditation App',
    desc: 'Exhibits helpful meditations to the stressed. Primarily focused on UX design; responsiveness, simple animations with an animation library (AOS), and a little bit of React with a React carousel library.',
    icons: [Css, ReactLogo, Figma, StyledC],
    website: 'https://daniel-aleksandrov-meditation.netlify.app/',
    repo: 'https://github.com/DanielAleks/metta',
  },
]

function Projects() {
  const size = useWindowSize()
  const [active, setActive] = useState(false)
  const [accessor, setAccessor] = useState(0)

  const mainImageHandler = (id): any => {
    setActive(!active)
    setAccessor(id)
  }

  return (
    <div className="project-container">
      <div className='project-city-bg' />
      <div className='main-images'>
        {images.map((item, id) =>
          <img onClick={() => mainImageHandler(id)} src={item.main} />
        )}
      </div>

      {active &&
        <Modals
          accessor={accessor}
          images={images}
          setActive={setActive}
        />
      }


      {active &&
        <HorozontalModal
          accessor={accessor}
          images={images}
          setActive={setActive}
        />
      }
    </div>
  )
}

export default Projects
