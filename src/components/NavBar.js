import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='nav-bar'>
    <img className='logo' src={require('../images/cloud-camera-logo.jpg')} />
      <span className='ui button'><NavLink to='/'>PhotoVision</NavLink></span>
      <button className='ui button'><NavLink className='ui button' to='/me'>Profile</NavLink></button>
      <NavLink className='ui button' to='/photos/new'>Upload</NavLink>
    </div>
  )
}

export default NavBar
