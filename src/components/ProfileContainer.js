import React from 'react'
import { connect } from 'react-redux'
import { fetchUserPhotos } from '../actions/photo_actions'
import ProfilePhotoList from './ProfilePhotoList'
import { Route } from 'react-router-dom'
import _ from 'lodash'
import PhotoDetail from './PhotoDetail'

class ProfileContainer extends React.Component{

  componentDidMount(){
    console.log(this.props)
    this.props.fetchPhotos()
  }

render(){
    return(
      <div><Route exact path='/me/photos/:id' render={(props) => {
        let photoId=parseInt(props.match.params.id, 10)
        let givenPhoto=this.props.photos.filter(photo => photo.id === photoId)
        return <PhotoDetail {...props} photo={givenPhoto} />
      }}/>
        <Route exact path='/me' render={(props) => <ProfilePhotoList photos={this.props.photos}/>} />
        <Route exact path='/me/:tag' render={(props) => {
          let urlTag=props.match.params.tag
          let allPhotos=this.props.photos
          let taggedPhotos=_.filter(allPhotos, {tags: [{tag: urlTag}] })
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
