import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {

    const renderPets = () => { return this.props.pets.map(petData => <Pet pet={petData} onAdoptPet={this.props.onAdoptPet} />)}
    return <div className="ui cards"> {renderPets()} </div>
  }
}
//onAdoptPet={this.props.onAdoptPet}
export default PetBrowser
