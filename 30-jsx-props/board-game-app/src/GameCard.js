import React from 'react';

class GameCard extends React.Component {
    render() {
        const { name, minAge, minPlayers, maxPlayers } = this.props

        return (
            <div className="game-card">
                <h1>{name}</h1>
                <div>{minAge}+ years old</div>
                <div>{minPlayers} - {maxPlayers} players</div>
            </div>
        )
    }
}

export default GameCard
// default export 

