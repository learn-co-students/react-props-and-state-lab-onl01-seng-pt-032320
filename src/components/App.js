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

  onChangeType = (e) => { this.setState({ filters: { type: e.target.value }});}

  onFindPetsClick = () => { 
    let fetchType = (this.state.filters.type === 'all') ? `/api/pets` : `/api/pets?type=${this.state.filters.type}`
      fetch(fetchType)
      .then(res => res.json()) 
      .then(newPets => { this.setState({ pets: newPets }) })
  }

  onAdoptPet = (pet_ID) => {
    let newPetList = Object.assign([], this.state.pets);
    for (let p of newPetList) { if (p.id === pet_ID) { p.isAdopted = true; break;}};
    this.setState({ pets: newPetList});
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} option={this.state.filters.type} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
