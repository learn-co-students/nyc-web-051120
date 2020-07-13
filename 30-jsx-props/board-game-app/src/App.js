import React from 'react';
import GameCard from './GameCard'
import './App.css';

let boardGames = [
  {
    id: 1,
    name: 'Exploding Kittens',
    minAge: 7,
    minPlayers: 2,
    maxPlayers: 5,
    isCollaborative: false,
    likes: 0
  },
  {
    id: 2,
    name: 'Cards Against Humanity',
    minAge: 18,
    minPlayers: 2,
    maxPlayers: 8,
    isCollaborative: false,
    likes: 0
  },
  {
    id: 3,
    name: 'Catan',
    minAge: 10,
    minPlayers: 3,
    maxPlayers: 6,
    isCollaborative: false,
    likes: 0
  },
  {
    id: 4,
    name: 'Dominion',
    minAge: 10,
    minPlayers: 2,
    maxPlayers: 4,
    isCollaborative: false,
    likes: 0
  },
  {
    id: 5,
    name: 'Beyond Balderdash',
    minAge: 10,
    minPlayers: 3,
    maxPlayers: 10,
    isCollaborative: false,
    likes: 0
  }
]


function App() {
  console.log('checking that my app is working')
  
  return (
    <div className="App">
      <div id="game-list">
        {boardGames.map((game, index) => 
          <GameCard 
            key={index}
            name={game.name}
            isCollaborative={game.isCollaborative}
            minAge={game.minAge}
            minPlayers={game.minPlayers}
            maxPlayers={game.maxPlayers}
            likes={game.likes}
            /> 
          )}
      </div>
    </div>
  );
}

export default App;
