import React from 'react'
import {Link} from 'react-router-dom'

function LeftNav() {
  return (
    <div className='left-main'>
        <h1>Actions</h1>
        <button className='left-button'><Link to='/bac'> Buy a car </Link></button>
        <button className='left-button'> <Link to='/upgrade'>Upgrade</Link></button>
        <button className='left-button'>Garage</button>
        <button className='left-button'>Missions</button>
        <button className='left-button'> <Link to='/buy-a-business'>Business</Link></button>
        
        </div>
  )
}

export default LeftNav