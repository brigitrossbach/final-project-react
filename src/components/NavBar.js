import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='nav-bar'>
    <NavLink to='/'><img className='logo' alt='logo' src={require('../images/cloud-camera-logo.jpg')} /></NavLink>

      <NavLink className='nav-bar-button upload-button' to='/photos/new'>Upload</NavLink>
      <NavLink to='/explore' className='nav-bar-button explore-button'>Explore</NavLink>
      <NavLink className='nav-bar-button profile-button' to='/me'>Profile</NavLink>
    </div>
  )
}

export default NavBar

// <NavLink className='nav-bar-button home-button' to='/'>PhotoVision</NavLink>
