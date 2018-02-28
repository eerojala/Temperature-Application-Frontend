import React from 'react'
import { Link } from 'react-router-dom'

const LocationList = ({ locations }) => {
  const sortedLocations = locations.sort((a, b) => {
    return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
  })

  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {sortedLocations.map(location => <li key={location.id}>
          <Link to={`/locations/${location.id}`}>{location.name}: {location.latitude}, {location.longitude}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default LocationList