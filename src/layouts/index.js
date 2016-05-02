import '../styles/base.css'
import React from 'react'
import { observer } from 'mobx-react'

// Stores
import LayoutStore from './LayoutStore'

// Layouts
import HeaderLayout from './HeaderLayout'
import SidebarLayout from './SidebarLayout'

const layout = observer(({ children }) => {
  return (
    <div>
      <HeaderLayout
        sidebarState={LayoutStore.isSidebarClosed} sidebarToggle={LayoutStore.onSidebarToggle}
      />
      <SidebarLayout />
      {children}
    </div>
  )
})

export default layout
