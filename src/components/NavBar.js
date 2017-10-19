import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  let handleLogout = () => {
    localStorage.removeItem('jwt')
  }

  let uploadButton
  let exploreButton
  let profileButton
  let loginButton
  let logoutButton
  let signUpButton
  let boardsButton
  let chatButton
  if (localStorage.getItem('jwt')){
    uploadButton = <NavLink className='nav-bar-button upload-button' to='/photo/new'>Upload</NavLink>
    exploreButton = <NavLink to='/explore' className='nav-bar-button explore-button'>Explore</NavLink>
    profileButton = <NavLink className='nav-bar-button profile-button' to='/me'>Profile</NavLink>
    loginButton = null
    signUpButton = null
    chatButton=<NavLink className='nav-bar-button chat-button' to='/chat'>Chat</NavLink>
    boardsButton=<NavLink className='nav-bar-button boards-button' to='/boards'>Boards</NavLink>
    logoutButton = <NavLink className='nav-bar-button logout-button' to='/login' onClick={handleLogout}>Logout</NavLink>
  } else {
    loginButton = <NavLink className='nav-bar-button login-button' to='/me'>Log In</NavLink>
    signUpButton= <NavLink className='nav-bar-button signup-button' to='/users/new'>New User</NavLink>
    uploadButton=null
    exploreButton=null
    profileButton=null
    logoutButton=null
    boardsButton=null
    chatButton=null
  }
  return(
    <div className='nav-bar'>
      <NavLink to='/'><img className='logo' alt='logo' src={require('../images/cloud-camera-logo.jpg')} /></NavLink>
      {uploadButton}
      {chatButton}
      {boardsButton}
      {exploreButton}
      {profileButton}
      {signUpButton}
      {loginButton}
      {logoutButton}
    </div>
  )
}

export default NavBar

// <NavLink className='nav-bar-button home-button' to='/'>PhotoVision</NavLink>
