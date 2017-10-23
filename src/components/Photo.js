import React from 'react';
import { Link } from 'react-router-dom'

const Photo = (props) => {
    return(
      <div className='image-card'>
        <div className='image indiv-photo'><Link to={'/photo/' + props.photo.id}><img src={props.photo.url} alt={props.photo.id} /></Link></div>
      </div>
    )
}

export default Photo
