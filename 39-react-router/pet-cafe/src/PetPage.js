import React from 'react';

class PetPage extends React.Component {
    state = {
        displayPet: null
    }

    componentDidMount(){
        // run your fetch to get all the current pet's info 
        // more info than is on App state in the array 
    }

    
    render(){
        let petId = this.props.match.params.id // a string of the id from the url bar 
        
        //
        let petToDisplay = this.props.pets.find(pet => pet.id === parseInt(petId))
        // console.log(petToDisplay)

        return (
            <div className="PetPage">
                {petToDisplay 
                    ? (
                        <>
                            <h1>{petToDisplay.name}</h1>
                            <img src={petToDisplay.image} alt={petToDisplay.name} />
                            <div>{petToDisplay.description}</div>
                        </>
                    ) : (
                        <div>Loading</div>
                    )
                }
            </div>
        )
    }

}

export default PetPage;