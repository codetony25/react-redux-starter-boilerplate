import React from 'react'
import CSSModules from 'react-css-modules'
import { IoNaviconRound } from 'react-icons/io'

// Styles
import Styles from './HeaderLayout.sss'

const HeaderLayout = (Store) => {
  return (
    <header>
      <div styleName="main-logo">
        <a href="#">
          <span styleName="logo-first">Code</span>
          <span styleName="logo-second">Tony</span>
        </a>
      </div>
      <nav>
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
      <div styleName="navicon">
        <IoNaviconRound onClick={Store.sidebarToggle} />
      </div>
    </header>
  )
}

export default CSSModules(HeaderLayout, Styles)
