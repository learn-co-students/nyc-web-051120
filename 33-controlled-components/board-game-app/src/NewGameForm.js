import React from 'react'

const NewGameForm = props => {
    return (
        <form id="new-game-form">
            <h2>Create a New Game</h2>
            <label>
                Name:
                <input placeholder="Name"/>
            </label>
            <label>
                Min Age:
                <input type="number" placeholder="Minimum Age"/>
            </label>
            <label>
                Min Players:
                <input type="number" placeholder="Minimum # Players"/>
            </label>
            <label>
                Min Players:
                <input type="number" placeholder="Maximum # Players"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewGameForm