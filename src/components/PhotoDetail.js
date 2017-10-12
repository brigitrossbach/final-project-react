import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PhotoDetail extends React.Component {
  render(){
    console.log('detail props',this.props)
    if (this.props.photo){
    return(
    <div className='photo-detail'>
      <img alt={this.props.photo.id} src={this.props.photo.url}/>
      <br />
      <p className='photo-username'><Link to={'/user/' + this.props.photo.user.username}>{this.props.photo.user.username}</Link></p>
      <h3 className='detail-caption'>{this.props.photo.caption}</h3>
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
