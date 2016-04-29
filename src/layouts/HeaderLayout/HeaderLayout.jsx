import React from 'react'
import { Link } from 'react-router'
import FaBeer from 'react-icons/fa/beer';
import {MdCancel, MdChat, MdCheck} from 'react-icons/md'

import CSSModules from 'react-css-modules'

// Styles
import styles from './HeaderLayout.css'

const Header = () => {
  return (
    <div>
      <ul className="main-nav">
        <li>
          <Link to="/">Home<FaBeer /></Link>
        </li>
      </ul>
      <div styleName="header-title">
        <h1>Starting Point <MdCheck /></h1>
        <h2>Second Point <MdChat /></h2>
        <p>Hello are you there? <MdCancel /></p>
        <h3 styleName="second-header">You will be a god at coding.</h3>
      </div>
    </div>
  )
}

export default CSSModules(Header, styles)
