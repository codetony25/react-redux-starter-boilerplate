import React from 'react'
import CSSModules from 'react-css-modules'

// Styles
import styles from './HeaderLayout.css'

const Header = () => {
  return (
    <header>
      <div styleName="navigation">
        <h1>Hello</h1>
      </div>
    </header>
  )
}

export default CSSModules(Header, styles)
