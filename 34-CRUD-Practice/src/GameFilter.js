import React from 'react'

const GameFilter = props => {
    return (
        <>
            <label>
                Search: 
                <input name="search" placeholder="Search by game name..." onChange={props.handleChange} value={props.search}/>
            </label>
            <label>
                Search by Max Players: 
                <input type="number" name="maxPlayers" placeholder="Search by max players..." onChange={props.handleChange} value={props.maxPlayers}/>
            </label>
        </>
    )
}

export default GameFilter