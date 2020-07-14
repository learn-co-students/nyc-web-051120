import React from 'react'
import GameCard from './GameCard'
import NewGameForm from './NewGameForm'

class GameContainer extends React.Component {
    state = {
        games: [],
        search: '',
        maxPlayers: '0'
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

    handleNewGame = (newGame) => {
        // add the new game object into the current games in state
        this.setState({ games: [...this.state.games, newGame] })
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render(){
        console.log('inside of GameContainer state', this.state)
        // logic for only showing the gamecards who meet the criteria
        let filteredGames = this.state.games.filter(game => 
            game.name.toLowerCase().includes(this.state.search.toLowerCase())
            && game.maxPlayers >= parseInt(this.state.maxPlayers)
        )
        // We can do this because... "any random string".includes("") === true 

        return (
            <div id="game-container">
                <NewGameForm handleNewGame={this.handleNewGame} />
                <h2 onClick={this.getAllGames}>All Games</h2>
                <label>
                    Search: 
                    <input name="search" placeholder="Search by game name..." onChange={this.handleChange} value={this.state.search}/>
                </label>
                <label>
                    Search by Max Players: 
                    <input type="number" name="maxPlayers" placeholder="Search by max players..." onChange={this.handleChange} value={this.state.maxPlayers}/>
                </label>
                <div id="game-list">
                    {filteredGames.map((game, index) => 
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