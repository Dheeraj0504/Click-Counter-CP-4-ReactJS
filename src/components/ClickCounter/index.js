// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    // console.log('Increase Button Clicked')
    this.setState(prevState => {
      // console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    // return <h1>Hello World !</h1>

    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been clicked
          <br />
          <span className="counter-value">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count !!</p>
        <div className="btn-container">
          <button
            className="button"
            type="button"
            onClick={this.onIncrementCount}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
