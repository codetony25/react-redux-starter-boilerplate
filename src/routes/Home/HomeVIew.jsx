import React from 'react'
import CssModules from 'react-css-modules'

// Styles
import Styles from './HomeView.sass'

// Images
import MainLogo from './assets/images/codetony.png'

const HomeView = () => {
  return (
    <div>
      <div styleName="main-hero">
        <div styleName="hero-logo">
          <img src={MainLogo} alt="Code Tony Main Logo" />
        </div>
        <h1 styleName="main-name">Tony Tai Nguyen</h1>
        <h1 styleName="main-title">Full Stack Developer</h1>
      </div>
    </div>
  )
}

export default CssModules(HomeView, Styles)
