import '../../styles/base.sass'
import React from 'react'
import { observer } from 'mobx-react'

// Stores
// import Store from './CoreLayoutStore'

// Layouts
import HeaderLayout from '../HeaderLayout'
// import SidebarLayout from '../SidebarLayout'

const CoreLayout = observer(({ children }) => {
  return (
    <div>
      <HeaderLayout />
      {children}
    </div>
  )
})

export default CoreLayout
