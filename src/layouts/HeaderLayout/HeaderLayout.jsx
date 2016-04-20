import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

// styles
import styles from './HeaderLayout.styl'

const HeaderLayout = () => {
  return (
    <div>
      <ul styleName="main-nav">
        <li><Link to="/">Home</Link></li>
      </ul>
      <div styleName="header-title">
        <h1>The Calculator</h1>
      </div>
    </div>
  )
}

export default CSSModules(HeaderLayout, styles)
