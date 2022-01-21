import React from 'react'
import StationTable from './StationTable.js'
import './App.css'

export default () => {
  return (
    <div className='App'>
      <h1 className='title'>Weather Stations</h1>
      <StationTable />
    </div>
  )
}
