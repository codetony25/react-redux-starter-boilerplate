import React from 'react'
import CSSModules from 'react-css-modules';

// Styles
import styles from './Example.styl'

// Images
import mainLogo from '../../assets/images/main-logo.jpg'

class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is a test!!!!</h2>
        <div className="inner">
          <h1>Inner stuff!</h1>
          <img src={mainLogo} alt=""/>
          <h3 styleName="test">Testing in component styles!!</h3>
        </div>
      </div>
    )
  }
}

export default CSSModules(Example, styles)
