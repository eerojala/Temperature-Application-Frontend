import React from 'react'

const LocationView = ({ location }) => {
  return (
    <div>
      <h2>{location.name}: {location.latitude}, {location.longitude}</h2>
      <h3>Temperature observations</h3>
      <ul>
        {location.observations.map(observation => <li key={observation._id}>
          {observation.date}: {observation.temperature}
        </li>)}
      </ul>
    </div>
  )
}

export default LocationView