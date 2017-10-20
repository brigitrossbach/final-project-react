import React from 'react';
import { Link } from 'react-router-dom'

const Photo = (props) => {
  let allTags = props.photo.tags.map((tag, index) => <p key={index}><Link to={'/photos/' + tag.tag}> #{tag.tag} </Link></p>)
  let likeCaption
  if (props.photo.likes_count === 1){
    likeCaption= ' Like'
  } else {
    likeCaption=' Likes'
  }
    return(
      <div className='image-card'>
        <div className='image indiv-photo'><Link to={'/photo/' + props.photo.id}><img src={props.photo.url} alt={props.photo.id} /></Link></div>
        <div className='content'><Link to={'/user/' + props.photo.username}>{props.photo.username}</Link> -- {props.photo.caption}</div>
        <div className='caption'></div>
        <div className='photo-list-likes-count'>{props.photo.likes_count}{likeCaption}</div>
        <div className='description'>{allTags}</div>
      </div>
    )
}

export default Photo
