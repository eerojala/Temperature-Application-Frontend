import React from 'react'

const LocationView = ({ location, observations }) => {
  return (
    <div>
      <h2>{location.name}</h2>
      <h3>Temperature observations</h3>
      <ul>
        {observations.map(observation => <li key={observation.id}>
          {observation.timestamp}: {observation.temperature}
        </li>)}
      </ul>
    </div>
  )
}

export default LocationView