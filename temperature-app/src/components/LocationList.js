import React from 'react'

const LocationList = ({ locations }) => {
  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations.map(location => <li key={location}>{location}</li>)}
      </ul>
    </div>
  )
}

export default LocationList