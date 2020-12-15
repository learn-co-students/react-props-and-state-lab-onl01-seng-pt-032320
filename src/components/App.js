import React from 'react'
//import getAll from '../data/pets'
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
  //this lab solutions make no sense
  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };
//end stupid stuff
  onFindPetsClick = (event) => {
    debugger;
    
    if(this.state.filters.type === "all"){
      
      //fetch("/api/pets")
      
    }else{ getByType(this.state.filters.type)

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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
