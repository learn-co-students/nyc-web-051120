import React from 'react';

/**
 * 
 * 1. convert the definition line (ie const to class)
 * 2. add your render method and move the return inside
 * 3. change any props to this.props
 * 
 */


class SongItem extends React.Component {
    state = {
        likes: 0
    }

    handleLikesClick = () => {
        this.setState({ likes: this.state.likes + 1 })
        // functional setState is great here! 
        // BEST PRACTICE ==> anytime you're using a previous state to update your state
        // this.setState(prevState => {
        //     return { likes: prevState.likes + 1 }
        // })
    }


    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.artist}</td>
                <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={() => this.props.handleUpdateFavorite(this.props.id, this.props.favorite)}>{this.props.favorite ? "💚" : "♡"}</td>
                <td onClick={this.handleLikesClick}>Likes: {this.state.likes}</td>
            </tr>
        )
    }
}

export default SongItem;