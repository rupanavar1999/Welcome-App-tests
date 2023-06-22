// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isChecked: false}

  onCheck = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  getInput = () => {
    const {isChecked} = this.state

    return isChecked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getInput()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button onClick={this.onCheck} className="button" type="button">
          {text}
        </button>
      </div>
    )
  }
}

Welcome.defaultProps = {
  name: 'Subscribed',
}

export default Welcome
