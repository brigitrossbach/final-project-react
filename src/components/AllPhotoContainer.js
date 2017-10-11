import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPhotos } from '../actions/photo_actions'

class AllPhotoContainer extends React.Component {

  componentDidMount(){
    this.props.fetchPhotos()
  }


  render(){
    return(
      <p>All Photos</p>
    )
  }
}

function mapStateToProps(state){
  return {
    photos: state.photos.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPhotos: () => {
      dispatch(fetchAllPhotos())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllPhotoContainer)
