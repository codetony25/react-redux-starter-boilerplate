import React from 'react'
import { connect } from 'react-redux'
import CssModules from 'react-css-modules'
import {
  incrementByOne,
  incrementByFive,
  resetCouter
} from './modules/counter'

// Styles
import Styles from './HomeView.styl'

// Images
import MainLogo from './assets/images/codetony.png'

class HomeView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="main-home">
        <img src={MainLogo} alt=""/>
        <h1>Counter Example</h1>
        <h3>
          Currently our number is:
          <span>{this.props.counter.number}</span>
        </h3>
        <button onClick={this.props.incrementByOne}>Increase by 1</button>
        <button onClick={this.props.incrementByFive}>Increase by 5</button>
        <button onClick={this.props.resetCounter}>Reset Counter</button>
      </div>
    )
  }
}

const mapActionCreators = {
  incrementByOne: () => incrementByOne(),
  incrementByFive: () => incrementByFive(),
  resetCounter: () => resetCouter()
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(
  mapStateToProps,
  mapActionCreators
)(CssModules(HomeView, Styles))
