import React from 'react'
import CSSModules from 'react-css-modules'

// Styles
import Styles from './HeaderLayout.styl'

const HeaderLayout = (Store) => {
  return (
    <header styleName="main-header">
      <div styleName="main-logo">
        <a href="#">
          <span styleName="logo-first">Code</span>
          <span styleName="logo-second">Tony</span>
        </a>
      </div>
      <nav styleName="main-navigation">
        <ul>
          <li>
            <a href="#">
              <span styleName="dots-top" />
              <span styleName="dots-bottom" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="dots-top" />
              <span styleName="dots-bottom" />
              About
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="dots-top" />
              <span styleName="dots-bottom" />
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="dots-top" />
              <span styleName="dots-bottom" />
              Contact
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="dots-top" />
              <span styleName="dots-bottom" />
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div styleName="main-navicon">
        <div styleName="navicon active"></div>
      </div>
    </header>
  )
}

export default CSSModules(HeaderLayout, Styles, {allowMultiple: true})
