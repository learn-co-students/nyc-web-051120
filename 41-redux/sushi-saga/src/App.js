import React, { Component } from 'react';
import { connect } from 'react-redux';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { addMoneyAction, fetchSushisAction } from './actions'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = { newMoney: '0' }

  componentDidMount(){
    this.props.fetchSushis()
  }

  handleChange = e => {
    this.setState({ newMoney: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addMoney(parseInt(this.state.newMoney)) // sends the dispatch to our reducer to update its state
    this.setState({ newMoney: '0'}) // updates local state to control the form 
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Money: 
            <input placeholder="Add Money" type="number" value={this.state.newMoney} onChange={this.handleChange}/>
            <button type="submit">Submit</button>
          </label>
        </form>
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    addMoney: (amount) => dispatch(addMoneyAction(amount)),
    fetchSushis: () => dispatch(fetchSushisAction())
  }
}

export default connect(null, mdp)(App);