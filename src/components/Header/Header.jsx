import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <ul className="main-nav">
        <li><Link to="/">Homes</Link></li>
      </ul>
      <div className="header-title">
        <h1>The Calculator</h1>
      </div>
    </div>
  )
}

export default Header
