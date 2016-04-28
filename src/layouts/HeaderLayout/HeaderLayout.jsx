import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

// Styles
import styles from './HeaderLayout.css'

const Header = () => {
  return (
    <div>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div styleName="header-title">
        <h1>Starting Point</h1>
      </div>
    </div>
  )
}

export default CSSModules(Header, styles)
