import React from 'react'
import { Button } from './helpers/styles'

const GamePage = props => {
    const {name, minAge, minPlayers, maxPlayers, likes, image, selectGame, removeReview} = props

    return (
        <div className="game-page">
            <div className="game-info">
                <h2>{name}</h2>
                <img src={image} className="game-page-img"/>
                <div>{minAge}+ years old</div>
                <div>{minPlayers} - {maxPlayers} players</div>
                <button onClick={null /** TODO: a new behavior is needed here */}>{likes}❤️</button>
                <Button onClick={() => selectGame(null)}>Go Back</Button>
            </div>
            <div className="game-reviews">
                <h3>Reviews</h3>
                <ul>
                    {props.reviews.map(review => (
                    <li key={review.id}>
                        {review.content}
                        <span onClick={() => removeReview(review.id)}>🗑</span>
                    </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default GamePage;