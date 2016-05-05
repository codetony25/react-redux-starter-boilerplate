import React from 'react'
import CssModules from 'react-css-modules'

// Styles
import Styles from './HomeView.styl'

const HomeView = () => {
  return (
    <div>
      <h3 styleName="main-home">This is your home page!</h3>
    </div>
  )
}

export default CssModules(HomeView, Styles)
