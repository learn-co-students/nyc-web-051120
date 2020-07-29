let toggleAction = () => ({type: 'TOGGLE'})
let likeAction = () => ({type: 'LIKE'})
let dislikeAction = () => ({type: 'DISLIKE'})
let addTextAction = () => ({type: 'ADD_TEXT'})
let changeTextAction = text => ({type: 'CHANGE_TEXT', payload: {value: text}})

// ACTIONS CREATORS: need to return an action object 
// when we get to async, we'll change what our action creators look like
// REDUX THUNK for async actions

export {
    toggleAction,
    likeAction,
    dislikeAction,
    addTextAction,
    changeTextAction
}