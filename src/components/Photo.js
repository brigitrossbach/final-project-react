import React from 'react';
import { Link } from 'react-router-dom'

const Photo = (props) => {
  let allTags = props.photo.tags.map((tag, index) => <p key={index}><Link to={'/me/' + tag.tag}>#{tag.tag}</Link></p>)
    return(
      <div className='indiv-photo'>
        <img src={props.photo.url} alt={props.photo.id} width='300' height='300'/>
        <div className='caption'>{allTags}</div>
      </div>
    )
}

export default Photo
