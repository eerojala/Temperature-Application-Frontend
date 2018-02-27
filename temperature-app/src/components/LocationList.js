import React from 'react'
import { Link } from 'react-router-dom'

const LocationList = ({ locations }) => {
  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations.map(location => <li key={location.id}>
          <Link to={`/locations/${location.id}`}>{location.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default LocationList