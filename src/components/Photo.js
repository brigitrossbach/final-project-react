import React from 'react';
import { Link } from 'react-router-dom'

const Photo = (props) => {
  let allTags = props.photo.tags.map((tag, index) => <p key={index}><Link to={'/photos/' + tag.tag}>#{tag.tag}</Link></p>)
    return(
  <div className='ui card'>
        <div className='image indiv-photo'><Link to={'/photo/' + props.photo.id}><img src={props.photo.url} alt={props.photo.id} /></Link></div>
        <div className='meta'>{props.photo.user.username}</div>
        <div className='description'>{allTags}</div>
    </div>
    )
}

export default Photo
