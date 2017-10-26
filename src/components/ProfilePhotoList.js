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
      <div><iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" title='giphy' width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40">via GIPHY</a></p></div>
    )
  }
  }
}



export default ProfilePhotoList
