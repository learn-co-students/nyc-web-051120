import React from 'react'
import { connect } from 'react-redux';
import { updateIndexAction } from '../actions'

const MoreButton = (props) => {
    return <button onClick={props.more}>
            More sushi!
          </button>
}
const mdp = dispatch => {
  return {
    more: () => dispatch(updateIndexAction())
  }
}

export default connect(null, mdp)(MoreButton)