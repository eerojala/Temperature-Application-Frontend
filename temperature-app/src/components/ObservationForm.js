import React from 'react'

class ObservationForm extends React.Component {
  constructor() {
    super()
    this.state = {
      location: '',
      temperature: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.newObservation({
      location: this.state.location,
      temperature: this.state.temperature,
      timestamp: new Date()
    })
    this.setState({
      location: '',
      temperature: ''
    })
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
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default ObservationForm