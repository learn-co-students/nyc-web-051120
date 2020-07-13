import React from 'react';
import GameCard from './GameCard'
import './App.css';

let boardGames = [
  {
    name: 'Exploding Kittens',
    minAge: 7,
    minPlayers: 2,
    maxPlayers: 5
  },
  {
    name: 'Cards Against Humanity',
    minAge: 18,
    minPlayers: 2,
    maxPlayers: 8
  },
  {
    name: 'Catan',
    minAge: 10,
    minPlayers: 3,
    maxPlayers: 6
  },
  {
    name: 'Dominion',
    minAge: 10,
    minPlayers: 2,
    maxPlayers: 4
  },
  {
    name: 'Beyond Balderdash',
    minAge: 10,
    minPlayers: 3,
    maxPlayers: 10
  }
]


function App() {
  console.log('checking that my app is working')
  return (
    <div className="App">
      {boardGames.map((game, index) => 
        <GameCard 
          key={index}
          {...game}
          /> 
        )}
      <GameCard name="Exploding Kittens" minAge={7} minPlayers={2} maxPlayers={5} />
    </div>
  );
}

export default App;
