import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Help from './Help';
import Auth from './Auth';
import PetIndex from './PetIndex';
import PetPage from './PetPage';


const API = 'http://localhost:3001/cats'

class App extends React.Component {
  state = {
    pets: []
  }

  componentDidMount(){
    fetch(API).then(r => r.json()).then(pets => this.setState({ pets }))
  }

  render(){
    // console.log(this.state)

    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/pets/:id" render={routerProps => <PetPage {...routerProps} pets={this.state.pets}/>}/>
          <Route path="/pets" render={(routerProps) => <PetIndex pets={this.state.pets} {...routerProps}/>}/>
          <Route path="/login" component={Auth}/> {/** routerProps automatically sentt to Auth component */}
          <Route path="/help">
            <Help />
          </Route>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
