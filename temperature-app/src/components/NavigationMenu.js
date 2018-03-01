import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <Menu inverted>
      <Menu.Item link>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/locations">Locations</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/createNew">Create a new observation</Link>
      </Menu.Item>
    </Menu>
  )
}

export default NavigationMenu