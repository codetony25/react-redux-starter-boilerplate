import React from 'react'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import NameStore from '../../stores/nameStore.js'

// Styles
import styles from './Example.styl'

// Images
import mainLogo from '../../assets/images/main-logo.jpg'

@observer
class Example extends React.Component {
  renderNameEdit() {
    if (!NameStore.nameSaved) {
      return (
        <div>
          <input type="text" value={NameStore.name} onChange={NameStore.onNameChange}/>
          <button onClick={NameStore.onNameButtonClick}>Save my name</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Name Saved as {NameStore.name}!</h1>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is a test!!!!</h2>
        <div className="inner">
          <h1>Inner stuff!</h1>
          <img src={mainLogo} alt=""/>
          <h3 styleName="test">Testing in component styles!!</h3>
          <div>
            <h1>What is your name?</h1>
            {this.renderNameEdit()}
            <h1>Name: {NameStore.name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Example, styles)
