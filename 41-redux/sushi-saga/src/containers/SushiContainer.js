import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from  '../components/Sushi'
import { connect } from 'react-redux';

const SushiContainer = props => {
  let { startIndex, eatenSushi, sushis } = props

  return (
    <Fragment>
      <div className="belt">
        {sushis.slice(startIndex, startIndex + 4).map(sushi => (
          <Sushi 
            key={sushi.id} 
            {...sushi} 
            showImg={eatenSushi.includes(sushi.id)}
            />
        ))}
        <MoreButton />
      </div>
    </Fragment>
  )
}

const msp = state => {
  return {
    sushis: state.sushis,
    eatenSushi: state.eatenSushi,
    startIndex: state.startIndex
  }
}

export default connect(msp)(SushiContainer)