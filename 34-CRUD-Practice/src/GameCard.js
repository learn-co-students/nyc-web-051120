import React from 'react';

class GameCard extends React.Component {

    render() {
        const { name, minAge, minPlayers, maxPlayers, isCollaborative, likes } = this.props

        return (
            <div className="game-card" >
                <h3>{name}</h3>
                <div>{isCollaborative ? "Collaborative" : "Competitive"}</div>
                <div>{minAge}+ years old</div>
                <div>{minPlayers} - {maxPlayers} players</div>
                <button onClick={null /** TODO: a new behavior is needed here */}>{likes}❤️</button>
                <button onClick={null /** TODO: a new behavior is needed here */}>Select Game</button>
            </div>
        )
    }
}

export default GameCard
