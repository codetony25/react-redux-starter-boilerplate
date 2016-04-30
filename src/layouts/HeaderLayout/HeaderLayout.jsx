import React from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

// Styles
import styles from './HeaderLayout.css'

const Header = () => {
  return (
    <header>
      <div styleName="navigation"></div>
    </header>
  )
}

export default CSSModules(Header, styles)
