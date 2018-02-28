import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import locationService from './services/locations'
import observationService from './services/observations'

import NavigationMenu from './components/NavigationMenu'
import Notifications from './components/Notifications'
import LocationList from './components/LocationList'
import ObservationForm from './components/ObservationForm'
import LocationView from './components/LocationView'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      locations: [],
      successMessage: null,
      errorMessage: null
    }
  }

  componentDidMount() {
    locationService.getAll().then(locations => this.setState({ locations }))
  }

  newObservation = async (observation) => {
    try {
      const newObservation = await observationService.create(observation)
      
      const location = this.locationById(observation.location)
      location.observations = location.observations.concat(newObservation)
      const locations = this.state.locations.map(l => l.id === location.id ? location : l)
      this.setState({ 
        locations,
        successMessage: 'Successfully added a new temperature observation!'
      })

      setTimeout(() => {
        this.setState({ successMessage: null })
      }, 5000)
    } catch (exception) {
      this.setState({ errorMessage: 'You must select a location and give temperature as a number' })

      setTimeout(() => {
        this.setState({ errorMessage: null })
      }, 5000)
    }
  }

  locationById = (locationId) => {
    return this.state.locations.find(location => location.id === locationId)
  }

  render() {
    return (
      <Container>
        <h1>Temperature observation app</h1>
        <Router>
          <div>
            <NavigationMenu />
            <Notifications successMessage={this.state.successMessage} errorMessage={this.state.errorMessage} />
            <Route exact path="/locations" render={() => <LocationList locations={this.state.locations} />} />
            <Route 
              path="/createNew" 
              render={() => <ObservationForm locations={this.state.locations} newObservation={this.newObservation} />} 
            />
            <Route exact path="/locations/:id" render={({match}) => <LocationView location={this.locationById(match.params.id)}/>} />
          </div>
        </Router>
        <div>
          <Footer />
        </div>
      </Container>
    )
  }
}

export default App