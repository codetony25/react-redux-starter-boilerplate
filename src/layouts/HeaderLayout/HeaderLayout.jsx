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
              <span styleName="first-dot">&bull;</span>
              <span styleName="second-dot">&bull;</span>
              <span styleName="third-dot">&bull;</span>
              <span styleName="fourth-dot">&bull;</span>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="first-dot">&bull;</span>
              <span styleName="second-dot">&bull;</span>
              <span styleName="third-dot">&bull;</span>
              <span styleName="fourth-dot">&bull;</span>
              About
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="first-dot">&bull;</span>
              <span styleName="second-dot">&bull;</span>
              <span styleName="third-dot">&bull;</span>
              <span styleName="fourth-dot">&bull;</span>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="first-dot">&bull;</span>
              <span styleName="second-dot">&bull;</span>
              <span styleName="third-dot">&bull;</span>
              <span styleName="fourth-dot">&bull;</span>
              Contact
            </a>
          </li>
          <li>
            <a href="#">
              <span styleName="first-dot">&bull;</span>
              <span styleName="second-dot">&bull;</span>
              <span styleName="third-dot">&bull;</span>
              <span styleName="fourth-dot">&bull;</span>
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div styleName="main-navicon">
        <i className="icon ion-navicon" onClick={Store.sidebarToggle} />
      </div>
    </header>
  )
}

export default CSSModules(HeaderLayout, Styles)
