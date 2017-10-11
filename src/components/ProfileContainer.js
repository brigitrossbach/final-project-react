import React from 'react'
import { connect } from 'react-redux'
import { fetchUserPhotos } from '../actions/photo_actions'
import ProfilePhotoList from './ProfilePhotoList'
import { Route } from 'react-router-dom'
import _ from 'lodash'

class ProfileContainer extends React.Component{

  componentDidMount(){
    console.log(this.props)
    this.props.fetchPhotos()
  }

render(){
    return(
      <div>
        <Route exact path='/me' render={(props) => <ProfilePhotoList photos={this.props.photos}/>} />
        <Route path='/me/:tag' render={(props) => {
          let urlTag=props.match.params.tag
          let allPhotos=this.props.photos
          let taggedPhotos=_.filter(allPhotos, {tags: [{tag: urlTag}] })
          console.log(taggedPhotos)
        return <ProfilePhotoList photos={taggedPhotos} {...props} />}}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPhotos: () => {
      dispatch(fetchUserPhotos())
    }
  }
}

function mapStateToProps(state){
  return{
    photos: state.photos.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
