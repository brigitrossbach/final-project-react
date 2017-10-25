import React from 'react'
import ProfilePhotoList from './ProfilePhotoList'
import { connect } from 'react-redux'
import { followUser, unfollowUser, fetchUserProfile } from '../actions/user_actions'

class UserProfile extends React.Component{

componentDidMount(){
  let username = this.props.username
  this.props.fetchUserProfile(username)
}

  handleFollow = (e) => {
    let followedUser = this.props.user
    this.props.followUser(followedUser)
  }

  handleUnfollow = () => {
    let followedUser = this.props.user
    this.props.unfollowUser(followedUser)
  }

  render(){
    if (this.props.user && this.props.currentUser){
      let isFollowing
      for (let i=0; i<this.props.currentUser.all_following.length; i++) {
          if (this.props.currentUser.all_following[i].id === this.props.user.id) {
              isFollowing = true
              break
          } else {
            isFollowing=false
          }}
      let ownProfile
      if (this.props.currentUser.id === this.props.user.id){
        ownProfile= true
      } else {
        ownProfile=false
      }
      let buttonFunction = () => {
        if (isFollowing){
          return <button className='follow-button' onClick={this.handleUnfollow}>Unfollow</button>
        } else if (ownProfile){
          return null
        } else {
          return <button className='follow-button' onClick={this.handleFollow}>Follow</button>
        }
      }
      let bio
      if (this.props.user.bio){
        bio = <p className='profile-bio'>{this.props.currentUser.bio}</p>
      } else {
        bio = null
      }
      let followCaption
      if (this.props.user.follower_count){
        if (this.props.user.follower_count === 1){
          followCaption = 'Follower'
        } else {
          followCaption = 'Followers'
        }
      }
      return(
        <div>
          <div className='profile-card'>
            <h2 className='profile-username'>{this.props.user.username}</h2>
            <p className='profile-name'>{this.props.user.first_name} {this.props.user.last_name}</p>
            <p className='profile-photo-count'>{this.props.user.post_count} Posts</p>
            <p className= 'profile-followers'>{this.props.user.follower_count} {followCaption}</p>
            <p className='profile-following'>{this.props.user.following_count} Following</p>
            {bio}
            {buttonFunction()}
          </div>
          <ProfilePhotoList photos={this.props.user.photos} />
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

function mapDispatchToProps(dispatch){
  return{
    followUser: (user) =>{
      dispatch(followUser(user))
    },
    unfollowUser: (user) => {
      dispatch(unfollowUser(user))
    },
    fetchUserProfile: (username) => {
      dispatch(fetchUserProfile(username))
    }
  }
}

function mapStateToProps(state){
  return{
    user: state.users.userProfile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
