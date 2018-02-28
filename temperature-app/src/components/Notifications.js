import React from 'react'
import { Message } from 'semantic-ui-react'

const Notifications = ({ successMessage, errorMessage }) => {
    const successNotification = successMessage ? <Message success>{successMessage}</Message> : null
    const errorNotification = errorMessage ? <Message error>{errorMessage}</Message> : null
    
    return (
      <div>
        {successNotification}
        {errorNotification}
      </div>
    )
}

export default Notifications