import React from 'react'
import ProfilePhotoList from './ProfilePhotoList'

class UserProfile extends React.Component{
  render(){
    console.log(this.props)
    if (this.props.photos){
      let photoList= <ProfilePhotoList photos={this.props.photos} />
      let user = this.props.photos[0].user
      return(
        <div>
        <div className='ui card'>
        <div className='content'>
          <a className='header'>{user.firstName} {user.lastName}</a>
        <div className='extra content'>
          <a>
            <i className='user icon'></i>
              Followers
          </a>
        </div>
        </div>
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

export default UserProfile
