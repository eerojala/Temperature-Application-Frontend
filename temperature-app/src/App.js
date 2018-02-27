import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import LocationList from './components/LocationList'
import ObservationForm from './components/ObservationForm'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      locations: [
        "Amsterdam",
        "Dubai",
        "Helsinki",
        "New York",
        "Tokyo"
      ],
      observations: []
    }
  }

  newObservation = (observation) => {
    observation.id = (Math.random() * 100000).toFixed(0)
    this.setState({
      observations: this.state.observations.concat(observation)
    })
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
