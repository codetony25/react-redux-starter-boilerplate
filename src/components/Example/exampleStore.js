import { observable, computed } from 'mobx'

class ExampleState {
  id = Math.random()
  @observable name = ''
  @observable nameSaved = false

  onNameButtonClick = () => {
    if (this.name !== '') {
      this.nameSaved = true
    }
  }

  onNameChange = (ev) => {
    this.name = ev.target.value
  }

  onNameReset = () => {
    this.name = ''
    this.nameSaved = false
  }
}

export default new ExampleState()