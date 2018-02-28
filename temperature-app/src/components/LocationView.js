import React from 'react'

const getLatestTemperature = (sortedObservations) => {
  return sortedObservations.length > 0 ? `${sortedObservations[0].temperature}C` : 'No observations added yet!'
}

const getWarmestRecentTemperature = (recentObservations) => {
  const warmest = Math.max.apply(Math, recentObservations.map((observation) => { return observation.temperature }))
  
  return recentObservations.length > 0 ? `${warmest}C` : 'No observations added within 24 hours!'
}

const getColdestRecentTemperature = (recentObservations) => {
  const coldest = Math.min.apply(Math, recentObservations.map((observation) => { return observation.temperature }))

  return recentObservations.length > 0 ? `${coldest}C` : 'No observations added within 24 hours!'
}

const LocationView = ({ location }) => {
  const sortedObservations = location.observations.sort((a, b) => {
    return (a.date > b.date) ? -1 : (a.date < b.date) ? 1 : 0
  })

  const timeNow = new Date()
  const oneDay = 24 * 60 * 60 * 1000

  const recentObservations = sortedObservations.filter(observation => 
    (timeNow.getTime() - new Date(observation.date).getTime()) <= oneDay
  )

  const latestTemperature = getLatestTemperature(sortedObservations)
  const warmestTemperature = getWarmestRecentTemperature(recentObservations)
  const coldestTemperature = getColdestRecentTemperature(recentObservations)

  return (
    <div>
      <h2>{location.name}: {location.latitude}, {location.longitude}</h2>
      <ul>
        <li>Latest temperature: {latestTemperature}</li>
        <li>Warmest temperature in the last 24 hours: {warmestTemperature}</li>
        <li>Coldest temperature in the last 24 hours: {coldestTemperature}</li>
      </ul>
      <h3>Temperature observations</h3>
      <ul>
        {sortedObservations.map(observation => <li key={observation._id}>
          {observation.temperature}C  -  {observation.date}
        </li>)}
      </ul>
    </div>
  )
}

export default LocationView