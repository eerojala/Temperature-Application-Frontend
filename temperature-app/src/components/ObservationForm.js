import React from 'react'

class ObservationForm extends React.Component {
  constructor() {
    super()
    this.state = {
      location: '',
      temperature: 0,
      timestamp: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
      <h2>Create a new observation</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          Location: <input name='location' value={this.state.location} onChange={this.handleChange} />
        </div>
        <div>
          Temperature: <input name='temperature' value={this.state.temperature} onChange={this.handleChange} /> 
        </div>
        <div>
          Time of observation: <input name='timestamp' value={this.state.timestamp} onChange={this.handleChange} />
        </div>
      </form>
    </div>
    )
  }
}

export default ObservationForm