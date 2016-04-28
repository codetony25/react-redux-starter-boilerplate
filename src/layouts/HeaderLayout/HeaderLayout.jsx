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
        <h2>Second Point</h2>
        <p>Hello are you there?</p>
        <h3 styleName="second-header">I am the god at coding.</h3>
      </div>
    </div>
  )
}

export default CSSModules(Header, styles)
