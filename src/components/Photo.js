import React from 'react';
import { Link } from 'react-router-dom'
import ReactHover from 'react-hover'



class Photo extends React.Component {
  render(){

    let caption = <p className='hover-caption'><img className='hover-icon' alt='heart-icon' src={require('../images/red-heart-icon.png')} />  {this.props.photo.likes_count}  <img className='hover-icon' alt='comment-icon' src={require('../images/comment-icon.png')}/> {this.props.photo.comment_count}</p>
    return(
      <div className='indiv-photo'>

        <Link to={'/photo/' + this.props.photo.id}>
        <ReactHover options={ { followCursor: true, shiftX: 30, shiftY: 0 } }>
        <ReactHover.Trigger type='trigger'>
        <img className='indiv-photo-img' src={this.props.photo.url} alt={this.props.photo.id} />
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
        {caption}
        </ReactHover.Hover>
        </ReactHover>
        </Link>

      </div>
    )
  }
}

export default Photo

// <img className='inline-icon' src={require('../images/heart-icon.png')}/>
// <p className='hover-caption'>{this.props.photo.likes_count}  - {this.props.photo.comment_count} Comments</p>
// <img className='inline-icon' alt='heart-icon' src={require('../images/grey-heart-icon.png')} />
