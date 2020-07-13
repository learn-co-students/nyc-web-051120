import React from 'react'
import GameCard from './GameCard'

class GameContainer extends React.Component {
    state = {
        games: []
    }

    getAllGames = () => {
        fetch('http://localhost:3000/games')
            .then(res => res.json())
            .then(data => {
                // what we do with the data in React is different
                console.log('inside of fetch', data)
                
                this.setState({ games: data })
            })
    }

    render(){
        console.log('inside of GameContainer state', this.state)
        return (
            <div id="game-container">
                <h2 onClick={this.getAllGames}>All Games</h2>
                <div id="game-list">
                    {this.state.games.map((game, index) => 
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
        )
    }
}

export default GameContainer