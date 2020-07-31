import React from 'react'
import { connect } from 'react-redux';
import { eatSushiAction } from '../actions'

const Sushi = ({ id, name, price, img_url, eat, showImg }) => {
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => eat(id, price)}>
        { !showImg && <img src={img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

const mdp = dispatch => {
  return {
    eat: (id, price) => dispatch(eatSushiAction(id, price)) 
  }
}

export default connect(null, mdp)(Sushi)