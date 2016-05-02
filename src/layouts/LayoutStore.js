import { observable } from 'mobx'

class LayoutStore {
  @observable isSidebarClosed = true

  onSidebarToggle() {
    this.isSidebarClosed = !this.isSidebarClosed
    console.log('is sidebar closed?', this.isSidebarClosed)
  }
}

export default new LayoutStore()
