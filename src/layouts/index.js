import '../styles/base.css'
import React, { PropTypes } from 'react'

// Layouts
import HeaderLayout from './HeaderLayout'
import SidebarLayout from './SidebarLayout'

const layout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      <SidebarLayout />
      {children}
    </div>
  )
}

layout.propTypes = {
  children: PropTypes.element,
}

export default layout
