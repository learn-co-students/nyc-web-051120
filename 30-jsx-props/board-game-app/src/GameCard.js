import React from 'react';

class GameCard extends React.Component {
    render() {
        const { name, minAge, minPlayers, maxPlayers, isCollaborative, likes } = this.props

        return (
            <div className="game-card">
                <h3>{name}</h3>
                <div>{minAge}+ years old</div>
                <div>{minPlayers} - {maxPlayers} players</div>
                <button>{likes}❤️</button>
            </div>
        )
    }
}

export default GameCard
// default export 

