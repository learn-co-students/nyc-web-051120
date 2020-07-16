import React from 'react'
import GameCard from './GameCard'
import NewGameForm from './NewGameForm'
import GamePage from './GamePage'
import GameFilter from './GameFilter'

class GameContainer extends React.Component {
    state = {
        games: [], // update this array 
        search: '',
        maxPlayers: '0',
        currentGame: null
        // some true / false to indicate whether we show the form and the index page
    }

    removeReview = reviewId => {
        fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(() => {
                // update the games array 
                let newGameArray = this.state.games.map(game => {
                    if(game.id === this.state.currentGame){
                        let newReviews = game.reviews.filter(review => review.id !== reviewId)
                        return { ...game, reviews: newReviews }
                        // return the object with all the same info EXCEPT the one review removed
                    }
                    return game
                })
                this.setState({ games: newGameArray })
                // and we have the id 
            })
    }

    updateLikes = (id, likes) => {
        fetch(`http://localhost:3000/games/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ 
                likes: likes + 1
            })
        })
            .then(res => res.json())
            .then(updatedGame => {
                // find the correct game
                // replace its representation with the new one from the backend
                // and update state
                let updatedGamesArr = this.state.games.map( game => {
                    // if the game has the right idea, return the new version
                    if (game.id === updatedGame.id){
                        return {...game, likes: updatedGame.likes} 
                        // so I can keep the reviews which wasn't return after the PATCH
                    }
                    return game 
                    // for all other games, just return the original
                })
                console.log('state arr', this.state.games)
                console.log('updatesGamesArr', updatedGamesArr)
                this.setState({ games: updatedGamesArr })
            })
    }

    selectGame = id =>  this.setState({ currentGame: id })

    getAllGames = () => {
        fetch('http://localhost:3000/games?_embed=reviews')
            .then(res => res.json())
            .then(data => {
                this.setState({ games: data })
            })
    }

    handleNewGame = (newGame) => {
        // add the new game object into the current games in state
        this.setState({ games: [...this.state.games, newGame] })
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    renderIndexPage = () => {
        let filteredGames = this.state.games.filter(game => 
            game.name.toLowerCase().includes(this.state.search.toLowerCase())
            && game.maxPlayers >= parseInt(this.state.maxPlayers)
        )

        return (
            <>
                <NewGameForm handleNewGame={this.handleNewGame} />
                <h2 onClick={this.getAllGames}>All Games</h2>
                <GameFilter 
                    handleChange={this.handleChange} 
                    search={this.state.search} 
                    maxPlayers={this.state.maxPlayers} />
                <div id="game-list">
                    {filteredGames.map(game => 
                        <GameCard 
                            updateLikes={this.updateLikes}
                            selectGame={this.selectGame}
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            isCollaborative={game.isCollaborative}
                            minAge={game.minAge}
                            minPlayers={game.minPlayers}
                            maxPlayers={game.maxPlayers}
                            likes={game.likes}
                            /> 
                    )}
                </div>
            </>
        )
    }

    render(){
        console.log(this.state)
        let chosenGame = this.state.games.find(game => game.id === this.state.currentGame)
        
        /** ternary
         * condition ? truthyReturn : falseReturn
         */
        return (
            <div id="game-container">
                {
                    this.state.games.length && this.state.currentGame 
                        ? <GamePage 
                            {...chosenGame} 
                            selectGame={this.selectGame}
                            removeReview={this.removeReview}/> 
                        : this.renderIndexPage()
                }
            </div>
        )
    }
}

export default GameContainer