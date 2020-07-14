import React from 'react';

class GameCard extends React.Component {
    // OLD SCHOOL
    // constructor(props){
    //     super(props) // uses the React.Component constructor before our own

    //     this.state = {
    //         likes: props.likes
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    // }


    // NEW SCHOOL
    state = {
        likes: this.props.likes
    }

    handleClick = (event) => {
        // event.persist() // VALID OPTION, less optimal
        let target = event.target

        // *this* keyword is BOUND to the *this* where the function is defined 
        // setTimeout(() => console.log('clicked a gamecard', event.target, 'target is..', target), 2000)
        // the games name ===> this.props.name
        alert(`You're going to play ${this.props.name}`)
    }

    handleLikeClick = (someCustomArg) => {
        console.log('inside of handleLikeClick')
        // IF YOU NEED SOME CUSTOM ARG, you need to use the notation on line 46

        // MUTATING STATE AND WRONG this.state.likes = this.state.likes + 1 
        this.setState({ likes: this.state.likes + 1 }) // AHEAD OF THE CURVE? Functional setState to deal w/ asynchronicity
        // adding one to this.state.likes
    }

    render() {
        const { name, minAge, minPlayers, maxPlayers, isCollaborative, likes } = this.props

        return (
            <div className="game-card" >
                <h3>{name}</h3>
                <div>{minAge}+ years old</div>
                <div>{minPlayers} - {maxPlayers} players</div>
                <button onClick={() => this.handleLikeClick('someCustomArg')}>{this.state.likes}❤️</button>
                <button onClick={this.handleClick}>Select Game</button>
            </div>
        )
    }
}

export default GameCard
// default export 
