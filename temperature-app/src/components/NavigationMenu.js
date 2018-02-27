import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <div>
      <Link to="/locations">Locations</Link>&nbsp;
      <Link to="/createNew">Create a new observation</Link>&nbsp;
  </div>
  )
}

export default NavigationMenu