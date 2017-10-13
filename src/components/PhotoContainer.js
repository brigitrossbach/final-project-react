import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPhotos, fetchUserPhotos } from '../actions/photo_actions'
import { Route } from 'react-router-dom'
import ProfilePhotoList from './ProfilePhotoList'
import PhotoDetail from './PhotoDetail'
import _ from 'lodash'
import UserProfile from './UserProfile'
import { fetchCurrentUser } from '../actions/user_actions'

class PhotoContainer extends React.Component {
  componentDidMount(){
    this.props.fetchUserPhotos()
    this.props.fetchPhotos()
    this.props.fetchCurrentUser()
  }
  render(){
    console.log('photocontainer',this.props)
    if (this.props.allPhotos && this.props.userPhotos){
      console.log('rendering')
      return(
        <div>
          <Route exact path = '/explore' render={(props) => <ProfilePhotoList photos={this.props.allPhotos} {...props}/>}/>
          <Route exact path='/me' render={(props) => <ProfilePhotoList photos={this.props.userPhotos} {...props} />}/>
          <Route exact path='/photos/:tag' render={(props) => {
            let urlTag=props.match.params.tag
            let allPhotos=this.props.allPhotos
            let taggedPhotos=_.filter(allPhotos, {tags: [{tag: urlTag}] })
            return <ProfilePhotoList photos={taggedPhotos} {...props} />}}/>
          <Route exact path='/photo/:id' render={(props) => {
            let photoId=parseInt(props.match.params.id, 10)
            let givenPhoto=this.props.allPhotos.find(photo => photo.id === photoId)
            return <PhotoDetail {...props} photo={givenPhoto} />
          }}/>
          <Route exact path='/' render={(props) => {
            return <ProfilePhotoList photos={this.props.homepagePhotos} />
          }} />
          <Route exact path='/user/:username' render={(props) => {
            let username=props.match.params.username
            let userProfilePhotos=this.props.allPhotos.filter(photo =>{
              return photo.username == username
            })
            return <UserProfile {...props} currentUser={this.props.currentUser} photos={userProfilePhotos} />
          }} />
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}


function mapStateToProps(state){
  return{
    userPhotos: state.photos.userPhotos,
    allPhotos: state.photos.list,
    homepagePhotos: state.users.homepagePhotos,
    currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchUserPhotos: () => {
      dispatch(fetchUserPhotos())
    },
    fetchPhotos: () => {
      dispatch(fetchAllPhotos())
    },
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);
