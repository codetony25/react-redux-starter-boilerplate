import React from 'react'
import { Link } from 'react-router'

const HeaderLayout = () => {
  return (
    <div>
      <ul className="main-nav">
        <li><Link to="/">Home</Link></li>
      </ul>
      <div className="header-title">
        <h1>The Calculator</h1>
      </div>
    </div>
  )
}

export default HeaderLayout
