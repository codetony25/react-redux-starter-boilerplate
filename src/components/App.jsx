import React from 'react'

// Images
import mainLogo from '../assets/images/main-logo.jpg'

// Styles
import styles from './App.styl'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is a test!!!!</h2>
        <div className="inner">
          <h1>Inner stuff</h1>
          <img src={mainLogo} alt=""/>
          <h3 className={styles.test}>Testing in component styles</h3>
        </div>
      </div>
    )
  }
}

export default App
