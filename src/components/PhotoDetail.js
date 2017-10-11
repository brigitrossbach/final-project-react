import React from 'react'

const PhotoDetail = (props) =>{
  return(
    <div className='photo-detail'>
      <img alt={props.photo[0].id} src={props.photo[0].url}/>
      <br />
      <h3>{props.photo[0].caption}</h3>
    </div>
  )
}

export default PhotoDetail
