import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="header-title">
        <h1>Starting Point</h1>
      </div>
    </div>
  )
}

export default Header
