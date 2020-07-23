import React from 'react';
import PetCard from './PetCard'

const PetIndex = props => {
    console.log(props.history.push)
    return (
        <div className="pet-index">
            {props.pets.map(pet => <PetCard key={pet.id} {...pet} push={props.history.push}/>)}
        </div>
    )
}

export default PetIndex;