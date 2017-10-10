import React from 'react'
import { connect } from 'react-redux'
import { fetchUserPhotos } from '../actions/photo_actions'
import ProfilePhotoList from './ProfilePhotoList'

class ProfileContainer extends React.Component{

  componentDidMount(){
    this.props.fetchPhotos()
  }

  render(){
    return(
      <ProfilePhotoList />
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPhotos: () => {
      dispatch(fetchUserPhotos)
    }
  }
}

export default connect(null, mapDispatchToProps)(ProfileContainer)
