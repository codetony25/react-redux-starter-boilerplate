import { observable, computed } from 'mobx'

class Name {
  id = Math.random()
  @observable name = ''
  @observable nameVisible = true
  @observable nameSaved = false

  onNameButtonClick = () => {
    if (this.name !== '') {
      this.nameSaved = true
    }
  }
  
  onNameChange = (ev) => {
    this.name = ev.target.value
    console.log(this.name)
  }
}

export default new Name()