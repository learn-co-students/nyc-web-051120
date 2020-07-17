import React from 'react'
import HogTile from './HogTile'
import Filter from './Filter'

class HogContainer extends React.Component {
    state = { 
        hogs: [],
        onlyGreased: false,
        sortBy: ''
    }

    componentDidMount(){
        fetch('http://localhost:3001/hogs')
            .then(res => res.json())
            .then(hogs => this.setState({ hogs }))
    }

    toggleGreased = () => {
        this.setState({ onlyGreased: !this.state.onlyGreased })
        // functional setState is ideal
    }

    handleChange = e => {
        this.setState({ sortBy: e.target.value })
    }

    render(){
        console.log(this.state)
        let filteredHogs = this.state.hogs.filter( hog => hog.greased )
        let displayHogs = this.state.onlyGreased ? filteredHogs : [...this.state.hogs] // need to copy so we dont mutate when we sort 

        if (this.state.sortBy === 'name'){
            displayHogs.sort((a, b) => a.name.localeCompare(b.name) ) 
            // FOR THIS CASE, WORKS ===> .sort((a, b) => (a.name > b.name ? 1 : -1))

        } else if (this.state.sortBy === 'weight') {
            displayHogs.sort((hogA, hogB) => hogA.weight > hogB.weight ? 1 : -1)
        }

        return (
            <div className="">
                <Filter 
                    sortBy={this.state.sortBy}
                    onlyGreased={this.state.onlyGreased}
                    handleChange={this.handleChange}
                    toggleGreased={this.toggleGreased}/>
                {displayHogs.map((hog, index) => <HogTile key={hog.name} {...hog} />)}
                {/** spread operator takes an object  */}
            </div>
        )
    }
}

export default HogContainer

/**
 *               App
 *         Nav       HogContainer
 *                          /|\
 *                      HogTiles
 */