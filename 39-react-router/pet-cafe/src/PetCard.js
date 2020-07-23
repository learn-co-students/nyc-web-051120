import React from 'react';

const PetCard = props => {
    // console.log(props)
    let { image, name, isAdopted, id, push } = props;

    return (
        <div className="pet-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div>{isAdopted ? "In a Loving Home" : "Up for Adoption"}</div>
            <button onClick={() => push(`/pets/${id}`)}>Visit Me!</button>
        </div>
    )
}

export default PetCard;