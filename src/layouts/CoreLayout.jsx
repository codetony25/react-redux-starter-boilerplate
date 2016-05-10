import '../styles/base.styl'
import React from 'react'
import { observer } from 'mobx-react'

// Stores
// import Store from './CoreLayoutStore'

// Layouts
import HeaderLayout from './HeaderLayout'

const CoreLayout = observer(({ children }) => {
  return (
    <div>
      <HeaderLayout />
      {children}
    </div>
  )
})

export default CoreLayout
