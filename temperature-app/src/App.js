import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import LocationList from './components/LocationList'
import ObservationForm from './components/ObservationForm'
import LocationView from './components/LocationView'
import Footer from './components/Footer'

const generateId = () => {
  return (Math.random() * 100000).toFixed(0)
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      locations: [
        {
          name: 'Amsterdam',
          id: generateId()
        },
        {
          name: 'Dubai',
          id: generateId()
        },
        {
          name: 'Helsinki',
          id: generateId()
        },
        {
          name: 'New York',
          id: generateId()
        },
        {
          name: 'Tokyo',
          id: generateId()
        }
      ],
      observations: []
    }
  }

  newObservation = (observation) => {
    observation.id = generateId()
    this.setState({
      observations: this.state.observations.concat(observation)
    })
  }

  locationById = (id) => {
    let location
    console.log(id)
    for (let i = 0; i < this.state.locations.length; i++) {
      const temp = this.state.locations[i]
      console.log(temp.id)
      if (temp.id === id) {
        location = temp
      }
    }

    return location
  }

  observationsFromLocation = (locationId) => {
    const location = this.locationById(locationId)
    return this.state.observations.filter(observation => observation.location === location.name)
  }

  render() {
    return (
      <div>
        <h1>Temperature observation app</h1>
        <Router>
          <div>
            <NavigationMenu />
            <Route exact path="/locations" render={() => <LocationList locations={this.state.locations} />} />
            <Route 
              path="/createNew" 
              render={() => <ObservationForm locations={this.state.locations} newObservation={this.newObservation} />} 
            />
          </div>
        </Router>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
