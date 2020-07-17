import React from 'react'

const Filter = props => {
    return (
        <div>
            <button onClick={props.toggleGreased}>
                Greased Only: {props.onlyGreased ? "✅" : "❌"}
            </button>
            <label>
                Sort By:
                <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </label>
        </div>
    )
}

export default Filter