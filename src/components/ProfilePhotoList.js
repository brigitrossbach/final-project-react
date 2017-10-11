import React from 'react'
import { connect } from 'react-redux'
import Photo from './Photo'

class ProfilePhotoList extends React.Component {

  render(){
    console.log(this.props)
    let allPhotos = this.props.photos.map((photo, index) => <Photo photo={photo} key={index} />)
    return(
      <div className='ui link cards photo-list'>
      {allPhotos}
      </div>
    )
  }
}



export default connect()(ProfilePhotoList)
