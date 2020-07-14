import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state
  // }

  // no this.state b/c of ES6 syntax sugar glory
  state = {
    songs: []
        /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
  }

  getAllSongs = () => {
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(songs => {
        this.setState({ songs: songs })
      })
  }

  handleUpdateFavorite = (id, favorite) => {
    fetch(`http://localhost:6001/songs/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ 
            favorite: !favorite
        })
    })
        .then(res => res.json())
        .then(data => {
            // inside of App.js , this.setState to update songs
            console.log(data)
            // find the right song using the id
            // and update JUST THAT SONG inside of the array / replace it with the new data
            // 1. find the index of the correct song ==> so that we can replace it later 
            // 2. create a copy of this.state.songs so we DO NOT MUTATE
            // 3. update the correct index inside the copy array
            // 4. setState
            let targetSongIndex = this.state.songs.findIndex(song => song.id === data.id)
            let copySongs = [...this.state.songs] // DO NOT MUTATE STATE
            copySongs[targetSongIndex] = data
            this.setState({ songs: copySongs })
        })
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getAllSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    console.log('state of app', this.state)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer 
          songs={this.state.songs} 
          handleUpdateFavorite={this.handleUpdateFavorite}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
