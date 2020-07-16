import React from 'react';

class GameCard extends React.Component {

    render() {
        const { name, minAge, minPlayers, maxPlayers, isCollaborative, likes, id, selectGame, updateLikes } = this.props

        return (
            <div className="game-card" >
                <h3>{name}</h3>
                <div>{isCollaborative ? "Collaborative" : "Competitive"}</div>
                <div>{minAge}+ years old</div>
                <div>{minPlayers} - {maxPlayers} players</div>
                <button onClick={() => updateLikes(id, likes)}>{likes}❤️</button>
                <button onClick={() => selectGame(id)}>Select Game</button>
            </div>
        )
    }
}

export default GameCard
