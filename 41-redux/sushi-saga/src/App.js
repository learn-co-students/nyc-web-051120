import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    monies: 100,
    newMoney: '0',
    sushi: [], 
    eatenSushi: []
  }

  componentDidMount(){
    this.getSushi()
  }
  
  getSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({ sushi })) 
  }

  eatSushi = (id, price) => {
    if( !this.state.eatenSushi.includes(id) && price <= this.state.monies ){
      this.setState(prevState => ({ 
        eatenSushi: [ ...prevState.eatenSushi, id ],
        monies: prevState.monies - price 
      }))
    } else {
      alert('You either need mo monies or you already ate that one... weird')
    }
  }

  handleChange = e => {
    this.setState({ newMoney: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({
      monies: prevState.monies + parseInt(prevState.newMoney),
      newMoney: '0' 
    }))
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
        <SushiContainer 
          eat={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
          sushi={this.state.sushi}/>
        <Table 
          monies={this.state.monies}
          eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;