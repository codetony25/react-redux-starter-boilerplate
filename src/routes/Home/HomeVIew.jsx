import React from 'react'
import CssModules from 'react-css-modules'

// Styles
import Styles from './HomeView.styl'

// Images
import MainLogo from './assets/images/codetony.png'

const HomeView = () => {
  return (
    <div>
      <div styleName="main-hero">
        <div styleName="hero-logo">
          <img src={MainLogo} alt="Code Tony Main Logo" />
        </div>
        <div styleName="hero-main-text">
          <h1 styleName="main-name">Tony Tai Nguyen</h1>
          <h1 styleName="main-title">Full Stack Developer</h1>
        </div>
        <div styleName="divider-white"></div>
        <p styleName="main-slogan">Codetony's new slogan goes here. Whatever it is.</p>
        <div styleName="main-hero-button">
          <a href="#">Hit me up</a>
        </div>
      </div>
      <div styleName="main-about">
        <h2>Tony Tai Nguyen</h2>
        <div styleName="about-headline">
          <h3>Who am I</h3>
          <div styleName="divider-red"></div>
          <p styleName="about-description">I am a Full Stack JavaScript developer who is passionate in problem solving. I currently work at Docler Media in the city of Los Angeles and have been developing for 6 years</p>
        </div>
      </div>
    </div>
  )
}

export default CssModules(HomeView, Styles)
