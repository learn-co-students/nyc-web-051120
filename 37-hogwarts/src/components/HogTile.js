import React from 'react'


// <HogTile {...hog} />   ===> we can access props.name
// <HogTile hog={hog} />   ===> we can access props.hog.name

class HogTile extends React.Component {
    state = { showDetails: false }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
        // this.setState(prevState => ({ showDetails: !prevState.showDetails }))
    }


    /** making helper methods instead of other components like a HogDetails component
     * either strategey is fine 
     */
    renderFront = () => {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={`/hog-imgs/${this.props.name.toLowerCase().split(' ').join('_')}.jpg`} />
            </div>
        )
    }

    renderBack = () => {
        let { specialty, weight, greased } = this.props
        return (
            <div>
                <div>Speciality: {specialty}</div>
                <div>Weight: {weight}</div>
                <div>Greased: {greased ? "✅" : "❌"}</div>
                <div>Highest Medal Achieved: {this.props['highest medal achieved']}</div>
            </div>
        )
    }


    render(){
        return (
            <div className="pigTile" onClick={this.toggleDetails}>
                {this.renderFront()}
                {this.state.showDetails && this.renderBack()}
            </div>
        )

    }
}

export default HogTile