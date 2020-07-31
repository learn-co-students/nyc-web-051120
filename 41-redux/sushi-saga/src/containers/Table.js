import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={x} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.monies } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates(props.eatenSushi) }
        </div>
      </div>
    </Fragment>
  )
}

const msp = state => {
  return {
    monies: state.monies,
    eatenSushi: state.eatenSushi
  }
}

export default connect(msp)(Table)