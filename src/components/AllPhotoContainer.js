import React from 'react'
import ProfilePhotoList from './ProfilePhotoList'

class AllPhotoContainer extends React.Component {

  render(){
    if (this.props.photos) {
    return(
      <div>
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


export default AllPhotoContainer
