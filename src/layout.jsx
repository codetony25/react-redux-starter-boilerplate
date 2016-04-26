import './styles/main.styl'
import React, { PropTypes } from 'react'

// Layouts
import Header from './components/Header'

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

layout.propTypes = {
  children: PropTypes.element
}

export default layout
