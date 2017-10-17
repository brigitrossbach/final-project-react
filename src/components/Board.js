import React from 'react'
import Gallery from 'react-photo-gallery'

class Board extends React.Component {
  render(){
    console.log(this.props.board.photos)
    //let photoSet=this.props.board.photos.map(photo => {src: photo.url, width: 500, height: 500})
    return(
      <div></div>
      //<Gallery photos={} onClick={this.openLightbox} />
    )
  }
}

export default Board
