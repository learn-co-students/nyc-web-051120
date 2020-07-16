import React from 'react'
import Ticker from './Ticker'

// 1. When the app loads, start changing the number to a random # 1-100 every second 

// 2. When we click the button, stop the interval (then also restart it if there isn't one running)

// 3. When the number changes, if the new number is higher, turn the background green, if it is lower turn it red

/**
 * componentDidMoiunt
 * didUpdate
 * willUnmount
 * NONE
 */

class TickerContainer extends React.Component {

  state = {
    number: 0,
    myInterval: null,
    color: 'white'
  }

  componentDidMount(){
    this.createInterval()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.number < this.state.number && this.state.color !== 'green'){
      this.setState({ color: 'green' })
    } else if(prevState.number > this.state.number) {
      this.setState({ color: 'red' })
    } 
    // else {
    //   this.setState({ color: 'white' })
    // }

    // PRACTICE FOR HW...
    // how do you fix the conditionals to let it go back to white when we're the same 
    // my escape case is when the two #s are the same 
  }

  createInterval = () => {
    let myInterval = setInterval(() => this.setState({ number: Math.ceil(Math.random() * 100)}), 1000)
    this.setState({ myInterval }) // { myInterval: myInterval }
  }

  stopStartTicker = () => {
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else {
      this.createInterval()
    }
  }

  render(){
    console.log(this.state)
    return (
      <div className="box" style={{ backgroundColor: this.state.color }}>
        <button onClick={this.stopStartTicker}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 