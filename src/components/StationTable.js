// component for displaying rows of data
import React from 'react'
import './StationTable.css'

export default () => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <table className='station-table'>
        <thead>
          <th className='station-id'>Station ID</th>
          <th className='station-name'>Station Name</th>
        </thead>
        <tbody>
          {rows.map((element) => {
            return (
              <tr>
                <td className='station-id'>{'<Replace with Station ID>'}</td>
                <td className='station-name'>
                  {'<Replace with Station Name>'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
