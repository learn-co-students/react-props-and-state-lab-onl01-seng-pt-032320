import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  fetchAllPets = () => {
    let BASE_URL = '/api/pets'
    if (this.state.filters.type !== 'all') {
      BASE_URL += `?type=${this.state.filters.type}`
    }
    fetch(BASE_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      this.state.pets.push(jsonResponse)
    })
  }

  onAdoptPet = petId => {
    const updatedPets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true}: pet
    })
    this.setState({pets: updatedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              {/* child */}
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchAllPets}/>
            </div>
            <div className="twelve wide column">
              {/* child */}
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
