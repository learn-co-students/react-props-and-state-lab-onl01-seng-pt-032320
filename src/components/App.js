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

  changeType = (event) => {
    console.log("I'm here")
    this.setState({
      filters: {...this.state.filters, type: event.target.value}
    })
  }

  fetchPets = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
      // url = `/api/pets?type=${this.state.filters.type}` another way
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState(
        {pets: pets}
      ))
  }

  findPet = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true 
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.findPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
