import React from 'react'
import CssModules from 'react-css-modules'

// Styles
import Styles from './HomeView.styl'

// Images
import MainLogo from './assets/images/codetony.png'

const HomeView = () => {
  return (
    <div styleName="main-home">
      <img src={MainLogo} alt=""/>
      <h1>Counter Example</h1>
      <h3>
        Currently our number is:
        <span>0</span>
      </h3>
      <button>Increase by 1</button>
      <button>Increase by 5</button>
      <button>Reset Counter</button>
    </div>
  )
}

export default CssModules(HomeView, Styles)
