import React from 'react';
import './App.css';
import * as act from './actionCreators'
import { connect } from 'react-redux';


 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



const App = props => {
    // console.log(props)
  return (
    <div className={"App" + (props.darkMode ? " dark" : "")}>
      <button onClick={props.toggle}>Dark mode</button>
      <h3>{props.text}</h3>
      <input 
        name="text" 
        value={props.text} 
        onChange={e => props.changeText(e.target.value)}/>
      <button onClick={props.addText}>Add!</button>

      <h4>{props.likes} likes</h4>
      <button onClick={props.dislike}>
        Dislike <span role="img" aria-label="thumbs down">👎</span>
      </button>
      <button onClick={props.like}>
        Like<span role="img" aria-label="thumbs up">👍</span>
      </button>
      {
        props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
      }
    </div>
  );
}

const mapStateToProps = state => { //msp
  return {
    likes: state.likes,
    darkMode: state.darkMode, 
    text: state.text,
    thangs: state.thangs
  }
}

const mapDispatchToProps = dispatch => { //mdp
  return {
    like: () => dispatch(act.likeAction()),
    dislike: () => dispatch(act.dislikeAction()),
    toggle: () => dispatch(act.toggleAction()),
    addText: () => dispatch(act.addTextAction()),
    changeText: (text) => dispatch(act.changeTextAction(text))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

  // state = {
  //   likes: 0,
  //   text: '',
  //   darkMode: false,
  //   thangs: []
  // }

  // DISPATCH JOB:  updating the state 
  //dispatch = (type, payload) => {
    // let newState = this.reducer(type, payload)
    // console.log('using dispatch', type, payload, newState)

    // this.setState(newState)
 // }


  // REDUCER JOB: calculate the new state based on type and payload
  // reducer = (type, payload) => { // type is what kind of action, payload is our data
  //   let newState = {...this.state}
  //   switch(type){
  //     case 'LIKE':
  //       return {...newState,  likes: this.state.likes + 1 }
  //     case 'DISLIKE':
  //       return {...newState,  likes: this.state.likes - 1 }
  //     case 'TOGGLE':
  //       return {...newState,  darkMode: !this.state.darkMode }
  //     case 'CHANGE_TEXT':
  //       return {...newState,  text: payload.value } 
  //       // expect payload to look like {value: e.target.value}
  //     case 'ADD_TEXT':
  //       return {...newState,  
  //         text: '',
  //         thangs: [this.state.text, ...this.state.thangs]
  //       }
  //     default:
  //       return newState
  //   }
  // }

  // like = () => {}
  // dislike = () => {}
  // toggle = () => {}
  // handleChange = (event) => {}
  // addText = () => {}
