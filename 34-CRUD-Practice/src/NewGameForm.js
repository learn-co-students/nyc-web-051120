import React from 'react'

/**
 * Controlled Form in readt
 * 1. A piece of state for every input field 
 * 2. A change handler for that input field, attached to the relevant input tag, that updates our state
 * 3. The *value* attribute on the input itself **************
 * 4. A submit handler on the form itself (if you've got a submit button)
 * 
 */

const initialState = {
    name: '',
    image: '',
    minAge: 0,
    minPlayers: 1,
    maxPlayers: 1
}
class NewGameForm extends React.Component {
    state = initialState

    // DO NOT NEED FOUR IF WE HAVE NAMES ON THE INPUTS
    // handleNameChange = (e) => {
    //     this.setState({ name: e.target.value })
    // }

    // handleAgeChange = e => {
    //     this.setState({ minAge: e.target.value })
    // }

    // handleMinPlayerChange = e => {
    //     this.setState({ minPlayers: e.target.value })
    // }

    // handleMaxPLayerChange = e => {
    //     this.setState({ maxPlayers: e.target.value })
    // }

    // handleClear = (e) => {
    //     e.preventDefault()
    //     this.setState({ name: '' })
    // }

    handleChange = e => {
        console.log(e.target.name, '=======', e.target.value)
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        let { name, image, minAge, minPlayers, maxPlayers } = this.state
        e.preventDefault() //keeps it from refreshing the page 
        fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name, 
                image, 
                minAge: parseInt(minAge),
                minPlayers: parseInt(minPlayers),
                maxPlayers: parseInt(maxPlayers),
                likes: 0, 
                isCollaborative: false
            })
        })
            .then(res => res.json())
            .then(data => {
                // MOD3 DON'T DO THIS ANYMORE!!!! e.target.reset()
                // NEED TO CLEAR THE FORM
                this.setState(initialState)

                // NEED TO UPDATE THE FRONTEND DATA TO INCLUDE OUR NEW GAME
                this.props.handleNewGame(data)
                // console.log(data)
            })
    }


    render(){
        // console.log('NewGameForm State', this.state)
        return (
            <form id="new-game-form" onSubmit={this.handleSubmit}>
                <h2>Create a New Game</h2>
                {/* <button onClick={this.handleClear}>Clear</button> */}
                <label>
                    Name:
                    <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
                </label>
                <label>
                    Image:
                    <input name="image" placeholder="Image" onChange={this.handleChange} value={this.state.image}/>
                </label>
                <label>
                    Min Age:
                    <input name="minAge" type="number" placeholder="Minimum Age"  onChange={this.handleChange} value={this.state.minAge}/>
                </label>
                <label>
                    Min Players:
                    <input name="minPlayers" type="number" placeholder="Minimum # Players" onChange={this.handleChange} value={this.state.minPlayers}/>
                </label>
                <label>
                    Min Players:
                    <input name="maxPlayers" type="number" placeholder="Maximum # Players" onChange={this.handleChange} value={this.state.maxPlayers}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NewGameForm