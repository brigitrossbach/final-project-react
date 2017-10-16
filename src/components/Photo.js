import React from 'react';
import { Link } from 'react-router-dom'

const Photo = (props) => {
  let allTags = props.photo.tags.map((tag, index) => <p key={index}><Link to={'/photos/' + tag.tag}>#{tag.tag}</Link></p>)
    return(
      <div className='ui card'>
        <div className='image indiv-photo'><Link to={'/photo/' + props.photo.id}><img src={props.photo.url} alt={props.photo.id} /></Link></div>
        <div className='content'><Link to={'/user/' + props.photo.username}>{props.photo.username}</Link></div>
        <div className='caption'>{props.photo.caption}</div>
        <div className='photo-list-likes-count'>{props.photo.likes_count} Likes</div>
        <div className='description'>{allTags}</div>
      </div>
    )
}

export default Photo
