import React from 'react'
import {getAll, getByType} from '../data/pets'
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
  onFindPetsClick = (event) => {
    
    if(this.state.filters.type === "all"){
      
      // fetch("/api/pets") //not needed dunno
      // .then(response => response.json())
      // .then(data => {
      //   this.setState({
      //     pets: getAll()
      //   })
      // })
      this.setState({
        pets: getAll()
      })
      
    }else{ 
      // fetch(`/api/pets?type=${this.state.filters.type}`)
      // .then(response => response.json())
      // .then(data => getByType(this.state.filters.type))
      this.setState({
        pets: getByType(this.state.filters.type)
      })
    }
  }
  handleChange = (event) => {
    //console.log(`state change to: ${event.target.value}`)
    
    //this.props.onChangeType.onFindPetsClick(event) //not working
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }
  handleAdoption = (id) => {
    debugger;
    const pickedPet = this.state.pets.find(pet => pet.id === id)
    pickedPet.setState({
      isAdopted: true
    })
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
