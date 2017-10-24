import React from 'react'
import Photo from './Photo'

class ProfilePhotoList extends React.Component {

  render(){
    if (this.props.photos) {
      let allPhotos = this.props.photos.map((photo, index) => <Photo photo={photo} key={index} />)
      return(
        <div>
        <div className='photo-list'>
          {allPhotos}
        </div>
        </div>
      )

    } else {
    return(
      <div>Follow a user to see their photos.</div>
    )
  }
  }
}



export default ProfilePhotoList
