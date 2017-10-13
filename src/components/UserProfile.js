import React from 'react'
import ProfilePhotoList from './ProfilePhotoList'
import { connect } from 'react-redux'
import { followUser, unfollowUser } from '../actions/user_actions'
import { Card, Header } from 'semantic-ui-react'
import { fetchUser } from '../services/user_services'

class UserProfile extends React.Component{

  state={
    user: null
  }

componentWillReceiveProps(nextProps){
    if (nextProps.photos.length > 0){
      fetchUser(nextProps.photos[0].user_id)
      .then(user => this.setState({user: user}))
    }
}

  handleFollow = (e) => {
    let followedUser = this.state.user
    this.props.followUser(followedUser)
  }

  handleUnfollow = () => {
    let followedUser = this.state.user
    this.props.unfollowUser(followedUser)
  }

  render(){
    if (this.state.user && this.props.currentUser){
      let user = this.state.user
      let photoList= <ProfilePhotoList photos={this.props.photos} />
      let isFollowing
      this.props.currentUser.all_following.forEach(following =>{
        if (following.id === user.id){
          isFollowing=true
        } else {
          isFollowing=false
        }
      })
      let ownProfile
      if (this.props.currentUser.id === user.id){
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
        <div>
        <Card>
        <Card.Content>
          <Header>{user.firstName} {user.lastName}</Header>
        <Card.Content extra>
          <a>
              {user.followers.length} Followers
          </a><br />
          <a>
            {user.all_following.length} Following
          </a>
          <br />
          {buttonFunction()}
        </Card.Content>
        </Card.Content>
        </Card>
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
    }
  }
}

// function mapStateToProps(state){
//   return{
//     currentUser: state.users.currentUser
//   }
// }

export default connect(null, mapDispatchToProps)(UserProfile)
