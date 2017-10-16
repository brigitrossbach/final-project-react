import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class PhotoDetail extends React.Component {

  state={
    newComment: ''
  }

  handleChange=(e)=>{
    this.setState({newComment: e.target.value})
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    // let photoId=this.props.photo.id
    // let comment = this.state.newComment
    let newBody=JSON.stringify({comment: this.state.newComment, photoId: this.props.photo.id})
    fetch('http://localhost:3000/comments', {
      method: 'post',
      headers: {
        'Authorization':localStorage.getItem('jwt'),
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: newBody
    })
    .then(resp => resp.json())
    .then(json => { this.setState({newComment:''})
    })
  }

  render(){
    if (this.props.photo){
      let allComments
      if (this.props.photo.comments){
        allComments=this.props.photo.comments.map((comment, index) => <p key={index} className='each-comment'>{comment.comment}   --<Link to={'/user/' + comment.username}>{comment.username}</Link></p>)
      } else {
        allComments=<p></p>
      }
    return(
    <div className='photo-detail'>
      <img alt={this.props.photo.id} src={this.props.photo.url}/>
      <br />
      <p className='photo-username'><Link to={'/user/' + this.props.photo.username}>{this.props.photo.username}</Link></p>
      <p className='like-count'>{this.props.photo.likes_count} Likes</p>
      <br />
      <h3 className='detail-caption'>{this.props.photo.caption}</h3>
      <form onSubmit={this.handleSubmit} >
      <textarea className='comment-input' value={this.state.newComment} onChange={this.handleChange} placeholder='Add a Comment...' />
      <br />
      <br />
      <button className='add-comment-button' value='submit' type='submit'>Add Comment</button>
      </form>
      <br />
      <p className='comment-header'>Comments</p><br /> <br />
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


export default connect()(PhotoDetail)
