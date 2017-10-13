import React from 'react'
import Photo from './Photo'
import Search from './Search'

class ProfilePhotoList extends React.Component {

  render(){
    console.log(this.props)
    if (this.props.photos.length > 0) {
      let allPhotos = this.props.photos.map((photo, index) => <Photo photo={photo} key={index} />)
      return(
        <div>
        <div className='ui link cards photo-list'>
          {allPhotos}
        </div>
        </div>
      )
    } else {
    return(
      <div></div>
    )
  }
  }
}



export default ProfilePhotoList
