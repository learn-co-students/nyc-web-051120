import React from 'react';
import PetCard from './PetCard'
import PetPage from './PetPage'
import { Route, Switch } from 'react-router-dom'

const PetIndex = props => {
    console.log(props)
    let { match, pets } = props;
    return (
        <div className="pet-index">
            <Switch>
                <Route 
                    exact path={`${match.path}`} 
                    render={() => <> {pets.map(pet => <PetCard key={pet.id} {...pet} match={props.match} push={props.history.push}/>)} </>}
                />
                <Route path={`${match.path}/:id`} render={routerProps => <PetPage {...routerProps} pets={pets}/>} />
            </Switch>
        </div>
    )
}

export default PetIndex;