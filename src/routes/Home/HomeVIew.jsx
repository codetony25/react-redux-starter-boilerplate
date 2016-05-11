import React from 'react'
import CssModules from 'react-css-modules'

// Styles
import Styles from './HomeView.styl'

// Images
import MainLogo from './assets/images/codetony.png'
import DesignImg from './assets/images/design.png'
import PrototypeImg from './assets/images/prototype.png'
import SearchImg from './assets/images/search.png'
import ToolsImg from './assets/images/tools.png'

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
          <h3>Who I am</h3>
          <div styleName="divider-red"></div>
          <p styleName="about-description">I am a Full Stack JavaScript developer who is passionate in problem solving. I currently work at Docler Media in the city of Los Angeles and have been developing for 6 years</p>
        </div>
        <div styleName="about-section">
          <div styleName="about-column">
            <img src={DesignImg} alt=""/>
            <h3>Passion</h3>
            <p>I truely have a passion for building things with code. I've grown up with computers and I never let go of it. Technology amazes me because you can let your imagination run wild and create whatever want.</p>
            <div styleName="red-dot"></div>
          </div>
          <div styleName="about-column">
            <img src={PrototypeImg} alt=""/>
            <h3>Problem Solver</h3>
            <p>I don't see building websites or apps as an obstacle, but more of a challange. Once I start it, I do not want to stop. I would do whatever it takes to find the right answers to make sure the my project gets finished.</p>
            <div styleName="red-dot"></div>
          </div>
          <div styleName="about-column">
            <img src={SearchImg} alt=""/>
            <h3>Debugger</h3>
            <p>I sometimes hear people say that they hate debugging, but I actually really love it. I feel the best coders are the best debuggers. The feeling that I get from finally debugging something is just awesome.</p>
            <div styleName="red-dot"></div>
          </div>
          <div styleName="about-column">
            <img src={ToolsImg} alt=""/>
            <h3>Full Stack</h3>
            <p>I am able to work with front and back end technologies. I even have some designing experience with photoshop. My preferred and favorite weapon of choice is JavaScript. Currently doing new projects with ES2015.</p>
            <div styleName="red-dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CssModules(HomeView, Styles)
