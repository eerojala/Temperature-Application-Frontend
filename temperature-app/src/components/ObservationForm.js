import React from 'react'
import { Form, Dropdown, Button } from 'semantic-ui-react'

class ObservationForm extends React.Component {
  constructor() {
    super()
    this.state = {
      location: '',
      temperature: ''
    }
  }

  handleLocationChange = (event, data) => {
    this.setState({ location: data.value })
  }

  handleTemperatureChange = (event) => {
    this.setState({ temperature: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    await this.props.newObservation({
      location: this.state.location,
      temperature: this.state.temperature === '' ? 'empty' : Number(this.state.temperature),
      date: new Date()
    })

    this.setState({
      temperature: ''
    })
 }

  render() {
    const options = this.props.locations.map(location => ({
      key: location.id,
      value: location.id,
      text: location.name
    }))

    return (
      <div>
        <h2>Create a new observation</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Location</label>
            <Dropdown placeholder='Select location' fluid search selection options={options} onChange={this.handleLocationChange}/>
          </Form.Field>
          <Form.Field>
            <label>Temperature (in celcius)</label>
            <input name='temperature' value={this.state.temperature} onChange={this.handleTemperatureChange} /> 
          </Form.Field>
          <Button type='submit'>Create</Button>
        </Form>
      </div>
    )
  }
}

export default ObservationForm