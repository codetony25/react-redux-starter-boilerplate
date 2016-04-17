import React from 'react'
import { Link } from 'react-router'

const HeaderLayout = () => {
  return (
    <div>
      <ul className="main-nav">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/example">Example</Link></li>
        <li><Link to="/exampleView">Example View</Link></li>
      </ul>
    </div>
  )
}

export default HeaderLayout
