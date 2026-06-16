import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
       <Link to='/home'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
         <Link to='/profile/1'>Profile</Link>
    </div>
  )
}

export default navbar