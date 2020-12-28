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

  onChangeType = (event) => {
    this.setState({
      ...this.state,
      filters: { type: event.target.value }
    });
  }

  onFindPetsClick = () => {
    let url = '/api/pets'

    if(this.state.filters.type === 'all'){
      url = url 
    }
    else {
    const type = this.state.filters.type 
    url = url + '?type='.concat(type)
    }
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pets: data.pets 
      })
    })
  }

  onAdoptPet = (event) => {
    const id = event.target.id 
    const findPet = this.state.pets.filter(p => p.id === id)
    findPet.isAdopted = true 
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick= {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pet={this.state.pets} adoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
