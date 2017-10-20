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
      let photoList= <ProfilePhotoList photos={this.props.user.photos} />
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
          return <button onClick={this.handleUnfollow}>Unfollow</button>
        } else if (ownProfile){
          return null
        } else {
          return <button onClick={this.handleFollow}>Follow</button>
        }
      }
      return(
        <div className='user-profile-card'>
        <div className='user-profile-username'>{this.props.user.username}</div>
          <div className='user-name'>{this.props.user.first_name} {this.props.user.last_name}</div>
        <div className='follower-info'>
          <a>
              {this.props.user.follower_count} Followers
              <br />
          </a>
          <a>
            {this.props.user.following_count} Following
          </a>
          <br />
          {buttonFunction()}
        </div>
        {photoList}
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
