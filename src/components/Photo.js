import React from 'react';
import { Link } from 'react-router-dom'

class Photo extends React.Component {

  state={
    hover: false
  }

  handleMouseOver = () =>{
    this.setState({hover: true})
  }

  handleMouseOut = () => {
    this.setState({hover: false})
  }

  render(){
    let photoDetails
    if (this.state.hover === true){
      photoDetails = <span className='fade-caption'>{this.props.photo.likes_count} -- {this.props.photo.comment_count}</span>
    } else {
      photoDetails=null
    }
    return(
      <div className='image-card'>
        <div className='image indiv-photo'><Link to={'/photo/' + this.props.photo.id}><img src={this.props.photo.url} alt={this.props.photo.id} /><p className='hover-caption'>{this.props.photo.likes_count} {this.props.photo.comment_count}</p></Link></div>
      </div>
    )
  }
}

export default Photo
