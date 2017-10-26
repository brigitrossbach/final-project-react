import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePhoto, likePhoto, unlikePhoto, addComment, addPhotoToBoard, fetchCurrentPhoto, deleteComment } from '../actions/photo_actions'

class PhotoDetail extends React.Component {

  state={
    newComment: '',
    selectedBoard: null
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId)
  }

  handleChange=(e)=>{
    this.setState({newComment: e.target.value})
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    let newBody=JSON.stringify({comment: this.state.newComment, photoId: this.props.photo.id})
    this.setState({newComment: ''})
    this.props.addComment(newBody)
  }

  handleLikeClick = () => {
    this.props.likePhoto(this.props.photo)
  }

  handleUnlikeClick = () => {
    let like= this.props.photo.likes.find(like => like.user_id === this.props.currentUser.id)
    this.props.unlikePhoto(like)
  }

  handleDeleteComment = (comment) => {
    this.props.deleteComment(comment)
  }

  handleSelectChange = (event) => {
    this.setState({selectedBoard: event.target.value})
  }

  handleBoardSubmit = (event) => {
    event.preventDefault()
    let body = JSON.stringify({photo_id: this.props.photo.id, board_id: this.state.selectedBoard})
    this.props.addPhotoToBoard(body)
    this.setState({selectedBoard:null})
    alert('Photo added!')
  }

  handleDeletePhoto = () => {
    this.props.deletePhoto(this.props.photo, this.props)
  }

  render(){
    let liked
    let likeIcon
    if (this.props.photo && this.props.photo.id === this.props.photoId){
      let allComments
      if (this.props.photo.comments && this.props.currentUser){
        allComments=this.props.photo.comments.map((comment, index) => {
          let trashCan
          if (comment.username === this.props.currentUser.username){
            trashCan = <img alt='trash' src={require('../images/trash-can-icon.png')} onClick={() =>this.handleDeleteComment(comment)} className='trash-can-icon' />
          } else {
            trashCan = null
          }
          return <p key={index} className='each-comment'>{trashCan} {comment.comment}   --<Link to={'/user/' + comment.username}>{comment.username}</Link></p>
        })
      } else {
        allComments=<p>No comments yet!</p>
      }
      let deleteButton
      if (this.props.currentUser && this.props.photo){
      if (this.props.photo.user_id === this.props.currentUser.id){
        deleteButton = <button className='delete-photo-button' onClick={this.handleDeletePhoto}>X</button>
      } else {
        deleteButton = null
      }
    }
      if (this.props.photo.likes && this.props.currentUser){
        for (let i=0; i<this.props.photo.likes.length; i++) {
            if (this.props.currentUser.id == this.props.photo.likes[i].user_id) {
                liked = true
                break
            } else {
              liked=false
            }}
      }
      if (liked === true) {
        likeIcon = <img alt='heart' className='like-icon' onClick={this.handleUnlikeClick} src={require('../images/red-heart-icon.png')} />
      } else {
        likeIcon = <img alt='heart' className='like-icon' onClick={this.handleLikeClick} src={require('../images/heart-icon.png')} />
      }
    let likeCaption
    if(this.props.photo.likes_count === 1){
      likeCaption= ' Like'
    } else{
      likeCaption= ' Likes'
    }

    let selectBoxOptions
    if (this.props.currentUser && this.props.currentUser.boards){
      selectBoxOptions = this.props.currentUser.boards.map((board,index) => <option key={index} value={board.id}>{board.name}</option>)
    }

    let allTags
    if (this.props.photo && this.props.photo.tags) {
      allTags = this.props.photo.tags.map((tag, index) => <p key={index}><Link to={'/photos/' + tag.tag}> #{tag.tag}</Link></p>)
    } else {
      allTags = null
    }

    return(
    <div className='photo-detail'>
      <img alt={this.props.photo.id} src={this.props.photo.url}/>
      <div className='caption'>
        <Link className='username' to={'/user/' + this.props.photo.username}>{this.props.photo.username}</Link>

        <span className='photo-caption'>{' ' + this.props.photo.caption}</span>
        <span className='like-count'>{likeIcon}{this.props.photo.likes_count}{likeCaption}</span>
        <div className='dropdown-photo-board'><form onSubmit={this.handleBoardSubmit}><select onChange={this.handleSelectChange}><option>Add to a Board</option>{selectBoxOptions}</select><button type='submit' value='submit'>+</button></form></div>
        {deleteButton}
        <div className='description' >{allTags}</div>
        <form className='add-comment-form form' onSubmit={this.handleSubmit} >
          <textarea className='comment-input' value={this.state.newComment} onChange={this.handleChange} placeholder='Add a Comment...' />
          <br />
          <br />
          <button className='add-comment-button' value='submit' type='submit'>Add Comment</button>
          </form>
          <p className='comment-header'>Comments</p><br />
          <div className='photo-comments'>{allComments}</div>
        </div>
    </div>
  )
} else {
  return (
    <div>
    <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40">via GIPHY</a></p>
    </div>
      )
    }
  }
}



function mapDispatchToProps(dispatch){
  return {
    likePhoto: (photo) => {
      dispatch(likePhoto(photo))
    },
    unlikePhoto: (like) => {
      dispatch(unlikePhoto(like))
    },
    addComment: (body) => {
      dispatch(addComment(body))
    },
    addPhotoToBoard: (body) => {
      dispatch(addPhotoToBoard(body))
    },
    fetchPhoto: (photoId) => {
      dispatch(fetchCurrentPhoto(photoId))
    },
    deleteComment: (comment) => {
      dispatch(deleteComment(comment))
    },
    deletePhoto: (photo, props) => {
      dispatch(deletePhoto(photo, props))
    }
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.users.currentUser,
    photo: state.photos.currentPhoto
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail)
