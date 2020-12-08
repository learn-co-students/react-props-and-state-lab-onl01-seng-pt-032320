import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    let petList = this.props.pets.map( pet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id}/>
    })

    return <div className="ui cards"> {petList} </div>
  }
}

export default PetBrowser
