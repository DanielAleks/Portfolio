import React from 'react'
import './technologies.sass'
import ReactLogo from '../../assets/images/icons/react-Logo.png'
import AngularLogo from '../../assets/images/icons/angular.png'
import VueLogo from '../../assets/images/icons/vue.png'
import Bulma from '../../assets/images/icons/bulma-logo.png'
import Css from '../../assets/images/icons/css.png'
import Expo from '../../assets/images/icons/expoLogo.png'
import Figma from '../../assets/images/icons/Figma.png'
import GA from '../../assets/images/icons/gaLogo.png'
import Github from '../../assets/images/icons/github.png'
import Html from '../../assets/images/icons/html.png'
import Js from '../../assets/images/icons/javascript.png'
import Netlify from '../../assets/images/icons/netlify.png'
import Npm from '../../assets/images/icons/npm.png'
import Paper from '../../assets/images/icons/paper.png'
import Spring from '../../assets/images/icons/react-spring.png'
import Redux from '../../assets/images/icons/redux.png'
import Sass from '../../assets/images/icons/sassLogo.png'
import StyledC from '../../assets/images/icons/styled-Components.png'
import Tailwind from '../../assets/images/icons/tailwind.png'
import TS from '../../assets/images/icons/typescript.png'
import Yarn from '../../assets/images/icons/yarn-logo.png'

function Technologies() {

  const iconData = [
    ReactLogo, AngularLogo, VueLogo, Github, TS, Redux, Sass, Figma, Bulma, Yarn,
    Paper, GA, Expo, Spring, Css, Html, Js, Netlify, Npm, StyledC, Tailwind
  ]

  return (
    <div className='tech-container'>
      {iconData.map((item) =>
        <div>
          <img src={item} />
        </div>
      )}
    </div>
  )
}

export default Technologies
