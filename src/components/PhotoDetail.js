import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { likePhoto, unlikePhoto, addComment, addPhotoToBoard, fetchCurrentPhoto } from '../actions/photo_actions'

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

  handleDeleteComment = () => {
    console.log('delete')
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

  render(){
    let liked
    let likeIcon
    if (this.props.photo){
      let allComments
      if (this.props.photo.comments && this.props.currentUser){
        allComments=this.props.photo.comments.map((comment, index) => {
          let trashCan
          if (comment.username === this.props.currentUser.username){
            trashCan = <img alt='trash' src={require('../images/trash-can-icon.png')} onClick={this.handleDeleteComment} className='trash-can-icon' />
          } else {
            trashCan = null
          }
          return <p key={index} className='each-comment'>{trashCan} {comment.comment}   --<Link to={'/user/' + comment.username}>{comment.username}</Link></p>
        })
      } else {
        allComments=<p></p>
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



    return(
    <div className='photo-detail'>
      <img alt={this.props.photo.id} src={this.props.photo.url}/>
      <br />
      <p className='photo-username'><Link to={'/user/' + this.props.photo.username}>{this.props.photo.username}</Link></p>
      <p className='like-count'>{likeIcon}{this.props.photo.likes_count}{likeCaption}</p><div className='dropdown-photo-board'><form onSubmit={this.handleBoardSubmit}><select onChange={this.handleSelectChange}><option>Add to a Board</option>{selectBoxOptions}</select><button type='submit' value='submit'>+</button></form></div>
      <br />
      <h3 className='detail-caption'>{this.props.photo.caption}</h3>
      <form onSubmit={this.handleSubmit} >
      <textarea className='comment-input' value={this.state.newComment} onChange={this.handleChange} placeholder='Add a Comment...' />
      <br />
      <br />
      <button className='add-comment-button' value='submit' type='submit'>Add Comment</button>
      </form>
      <br />
      <p className='comment-header'>Comments</p><br />
      <div className='photo-comments'>{allComments}</div>
    </div>
  )
} else {
  return (
  <div></div>
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
