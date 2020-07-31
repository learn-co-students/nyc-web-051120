const API = "http://localhost:3000/sushis"


const updateIndexAction = () => ({ type: 'UPDATE_INDEX' })
const eatSushiAction = (id, price) => ({ type: 'EAT_SUSHI', payload: { id, price } }) // {id, price} an example of key value assignment shortcut s
const addMoneyAction = (amount) => ({ type: 'ADD_MONEY', payload: { amount } })
// const fetchSushisAction = () => ({ type: 'FETCH_SUSHIS' })
const fetchSushisAction = () => dispatch => {
    // run my fetch
    fetch(API).then(r => r.json())
        .then(sushis => dispatch({ type: 'FETCH_SUSHIS', payload: { sushis }}))
    // then in my .then with the data, dispatch the action, with the appropriate payload
}



















export {
    updateIndexAction,
    eatSushiAction, 
    fetchSushisAction, 
    addMoneyAction
}