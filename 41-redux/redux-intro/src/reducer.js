
let initialState = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
}
    
    
const reducer = (prevState=initialState, action) => {
    // console.log('IN REDUCER', prevState, action)
    switch(action.type){
        case 'LIKE':
            return {...prevState,  likes: prevState.likes + 1 }
        case 'DISLIKE':
            return {...prevState,  likes: prevState.likes - 1 }
        case 'TOGGLE':
            return {...prevState,  darkMode: !prevState.darkMode }
        case 'CHANGE_TEXT':
            return {...prevState,  text: action.payload.value } 
            // expect payload to look like {value: e.target.value}
        case 'ADD_TEXT':
            return {...prevState,  
            text: '',
            thangs: [prevState.text, ...prevState.thangs]
            }
        default: 
            return prevState
    }
}

export default reducer;