import React from 'react';

const Photo = (props) => {
  let allTags = props.photo.tags.map((tag, index) => <p key={index}>{tag.tag}</p>)
    return(
      <div className='indiv-photo'>
        <img src={props.photo.url} alt={props.photo.id} width='300' height='300'/>
        <div className='caption'>{allTags}</div>
      </div>
    )
}

export default Photo
