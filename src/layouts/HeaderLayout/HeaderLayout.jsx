import React from 'react'
import CSSModules from 'react-css-modules'

// Styles
import Styles from './HeaderLayout.styl'

const HeaderLayout = (Store) => {
  return (
    <header>
      <h1 styleName="test">This is your header</h1>
    </header>
  )
}

export default CSSModules(HeaderLayout, Styles)
