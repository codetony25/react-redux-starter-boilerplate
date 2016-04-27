import '../styles/main.styl'
import React, { PropTypes } from 'react'

// Layouts
import HeaderLayout from './HeaderLayout'

const layout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      {children}
    </div>
  )
}

layout.propTypes = {
  children: PropTypes.element
}

export default layout
