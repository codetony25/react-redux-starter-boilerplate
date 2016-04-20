import '../../styles/main.styl'
import React, { PropTypes } from 'react'

// Layouts
import HeaderLayout from '../HeaderLayout'

const CoreLayout = ({ children }) => {
    return (
      <div>
        <HeaderLayout />
        {children}
      </div>
    )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
