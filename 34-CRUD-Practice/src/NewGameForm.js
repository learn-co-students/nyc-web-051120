import React from 'react'

const initialState = {
    name: '',
    image: '',
    minAge: 0,
    minPlayers: 1,
    maxPlayers: 1
}
class NewGameForm extends React.Component {
    state = initialState

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        let { name, image, minAge, minPlayers, maxPlayers } = this.state
        e.preventDefault() 
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
                this.setState(initialState)
                this.props.handleNewGame(data)
            })
    }


    render(){
        return (
            <form id="new-game-form" onSubmit={this.handleSubmit}>
                <h2>Create a New Game</h2>
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