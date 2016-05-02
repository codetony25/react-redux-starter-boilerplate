import React from 'react'
import CssModules from 'react-css-modules'
import { IoCloseRound } from 'react-icons/io'

// Styles
import Styles from './SidebarLayout.css'

const SidebarLayout = (Store) => {
  return (
    <aside styleName={Store.sidebarState ? 'close' : 'open'}>
      <div styleName="sidebar-close">
        <IoCloseRound onClick={Store.sidebarToggle} />
      </div>
      <h1>This is where the sidebar is</h1>
    </aside>
  )
}

export default CssModules(SidebarLayout, Styles)
