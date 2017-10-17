import React from 'react'
import PhotoGrid from 'react-photo-feed'
import "react-photo-feed/library/style.css";

class Board extends React.Component {

  render(){
  let photos = this.props.board.photos
  let photoSet = []
    for (let i=0; i<photos.length; i++){
      photoSet.push({id: photos[i].id, src: photos[i].url})
    }

    return(
      <div>
      <PhotoGrid className='photo-grid' columns={4} photos={photoSet} />
      </div>
    )
  }
}

export default Board
