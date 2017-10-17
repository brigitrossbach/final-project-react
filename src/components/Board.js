import React from 'react'
import Lightbox from 'react-images'

class Board extends React.Component {

  state={
    lightboxIsOpen: false,
    currentImage: 0
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen:false
    })
  }

  gotoPrevLightboxImage = () => {
    this.setState({currentImage: this.state.currentImage -1})
  }

  gotoNextLightboxImage = () => {
    this.setState({currentImage: this.state.currentImage + 1})
  }

  render(){
    let photoSet=this.props.board.photos.map(photo => {src: photo.url})
    return(
      <div>
    <Lightbox
     images={photoSet}
     isOpen={this.state.lightboxIsOpen}
     onClickPrev={this.gotoPrevLightboxImage}
     onClickNext={this.gotoNextLightboxImage}
     onClose={this.closeLightbox} />
    </div>
    )
  }
}

export default Board
