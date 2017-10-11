import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='nav-bar'>
      <span className='photo-vision'><NavLink to='/'>PhotoVision</NavLink></span>
      <NavLink className='nav-button' to='/me'>Profile</NavLink>
      <NavLink className='nav-button' to='/photos/new'>Upload</NavLink>
    </div>
  )
}

export default NavBar
