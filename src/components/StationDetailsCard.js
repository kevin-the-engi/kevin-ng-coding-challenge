// component for displaying additional station data
import React from 'react'
import './StationDetailsCard.css'

export default () => {
  const handleCloseClick = () => {}

  return (
    <div className='station-details-card'>
      <h2>Station Details</h2>
      <div className='property-row'>
        <span className='property-name'>Latitude:</span>
        <span>{'<Replace with station latitude value>'}</span>
      </div>
      <div className='property-row'>
        <span className='property-name'>Longitude:</span>
        <span>{'<Replace with station longitude value>'}</span>
      </div>
      <div className='property-row'>
        <span className='property-name'>Elevation:</span>
        <span>{'<Replace with station elevation value>'}</span>
      </div>

      <button onClick={handleCloseClick}>Close</button>
    </div>
  )
}
