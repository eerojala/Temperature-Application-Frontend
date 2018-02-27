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

  render() {
    return (
      <div>
        <h1>Temperature observation app</h1>
        <Router>
          <div>
            <NavigationMenu />
            <Route exact path="/locations" render={() => <LocationList locations={this.state.locations} />} />
            <Route path="/createNew" render={() => <ObservationForm />} />
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
