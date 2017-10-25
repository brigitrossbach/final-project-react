import React from 'react'
import ProfilePhotoList from './ProfilePhotoList'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SelfProfile extends React.Component {
  render(){
  if (this.props.photos && this.props.currentUser){
    let bio
    if (this.props.currentUser.bio){
      bio = <p className='profile-bio'>{this.props.currentUser.bio}</p>
    } else {
      bio = null
    }
    let followCaption
    if (this.props.currentUser.follower_count){
      if (this.props.currentUser.follower_count === 1){
        followCaption = 'Follower'
      } else {
        followCaption = 'Followers'
      }
    }
    return(
      <div>
        <div className='profile-card'>
          <h2 className='profile-username'>{this.props.currentUser.username}</h2>
          <p className='profile-name'>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
          <Link to='/me/edit' className='edit-profile-button' to='/me/edit'>Edit Profile</Link>
          <p className='profile-photo-count'>{this.props.currentUser.post_count} Posts</p>
          <p className= 'profile-followers'>{this.props.currentUser.follower_count} {followCaption}</p>
          <p className='profile-following'>{this.props.currentUser.following_count} Following</p>
          {bio}
        </div>
        <ProfilePhotoList photos={this.props.photos} />
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }

  }
}

function mapStateToProps(state){
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(SelfProfile)
