import { observable } from 'mobx'

class LayoutStore {
  @observable isSidebarClosed = true

  onSidebarToggle = () => {
    this.isSidebarClosed = !this.isSidebarClosed
  }
}

export default new LayoutStore()
