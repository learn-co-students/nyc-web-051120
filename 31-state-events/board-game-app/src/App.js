import React from 'react';
import GameCard from './GameCard'
import './App.css';
import NavBar from './NavBar';
import GameContainer from './GameContainer';

function App() {
  console.log('checking that my app is working')

  return (
    <div className="App">
      <NavBar />
      <GameContainer />
    </div>
  );
}

export default App;
