import React from 'react'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import ExampleStore from './ExampleStore.js'

// Styles
import styles from './Example.styl'

// Images
import mainLogo from '../../assets/images/main-logo.jpg'

@observer
class Example extends React.Component {
  renderNameEdit() {
    if (!ExampleStore.nameSaved) {
      return (
        <div>
          <input type="text" value={ExampleStore.name} onChange={ExampleStore.onNameChange}/>
          <button onClick={ExampleStore.onNameButtonClick}>Save my name</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Name Saved as {ExampleStore.name}!</h1>
          <button onClick={ExampleStore.onNameReset}>Reset Name</button>
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
            <h1>Name: {ExampleStore.name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Example, styles)
