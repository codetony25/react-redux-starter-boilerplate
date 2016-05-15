import React from 'react'
import CSSModules from 'react-css-modules'

// Styles
import Styles from './HeaderLayout.styl'

const HeaderLayout = () => {
  return (
    <header styleName="main-header">
      <h1>CodeTony's React Starter Boilerplate</h1>
    </header>
  )
}

export default CSSModules(HeaderLayout, Styles, {allowMultiple: true})
