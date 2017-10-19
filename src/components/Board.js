import React from 'react'
// import PhotoGrid from 'react-photo-feed'
// import "react-photo-feed/library/style.css";
import DragSortableList from 'react-drag-sortable'

class Board extends React.Component {

  render(){
  let photos = this.props.board.photos
  let photoSet = []
    for (let i=0; i<photos.length; i++){
      photoSet.push({id: photos[i].id, src: photos[i].url})
    }
    let draggablePhotos = []
    for(let i=0; i<photos.length; i++){
      draggablePhotos.push({content: (<img src={photos[i].url} alt='board-photo' />)})
    }

    let onSort= function(sortedList, dropEvent){
      console.log('sorted list', sortedList, dropEvent)
    }
    //could probably save the list with ranks in the DB

    // <PhotoGrid className='photo-grid' columns={4} photos={photoSet} />

    return(
      <div>
      <DragSortableList className='photos-draggable-list' items={draggablePhotos} type='grid' />
      </div>
    )
  }
}

export default Board
