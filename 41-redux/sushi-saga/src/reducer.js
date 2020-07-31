const initialState = {
    monies: 50,
    sushis: [], 
    eatenSushi: [],
    startIndex: 0
}

const reducer = (prevState=initialState, action) => {
    console.log(action)
    switch(action.type){
        case 'FETCH_SUSHIS':
            return {...prevState, sushis: action.payload.sushis}
        case 'ADD_MONEY': 
            return {...prevState, monies: prevState.monies + action.payload.amount}
        case 'EAT_SUSHI':
            let { id, price } = action.payload  
            if (!prevState.eatenSushi.includes(id) && price <= prevState.monies ){
                return {...prevState, monies: prevState.monies - price, eatenSushi: [...prevState.eatenSushi, id]}
            } else {
                alert('GET MO MONIES')
                return {...prevState}
            }
        case 'UPDATE_INDEX':
            let newIndex = prevState.startIndex + 4
            return {...prevState, startIndex: newIndex >= prevState.sushis.length ? 0 : newIndex }
        default:
            return prevState
    }
}

export default reducer;