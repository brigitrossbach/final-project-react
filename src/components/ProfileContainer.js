import React from 'react'
import { connect } from 'react-redux'
import { fetchUserPhotos } from '../actions/photo_actions'
import ProfilePhotoList from './ProfilePhotoList'
import { Route } from 'react-router-dom'
import _ from 'lodash'
import PhotoDetail from './PhotoDetail'

class ProfileContainer extends React.Component{

  componentDidMount(){
    console.log('mounting profile container', this.props)
  }

render(){
  console.log("rendering ProfileContainer", this.props);
  if (this.props.photos){
    console.log('inside render')
    return(
      <div>

      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}
}

// function mapDispatchToProps(dispatch){
//   return {
//     fetchPhotos: () => {
//       dispatch(fetchUserPhotos())
//     }
//   }
// }
//
// function mapStateToProps(state){
//   return{
//     photos: state.photos.userPhotos
//   }
// }

// <div><Route exact path='/photo/:id' render={(props) => {
//   let photoId=parseInt(props.match.params.id, 10)
//   let givenPhoto=this.props.photos.find(photo => photo.id === photoId)
//   return <PhotoDetail {...props} photo={givenPhoto} />
// }}/>
//   <Route exact path='/me' render={(props) => <ProfilePhotoList photos={this.props.photos}/>} />
//   <Route exact path='/me/:tag' render={(props) => {
//     let urlTag=props.match.params.tag
//     let allPhotos=this.props.photos
//     let taggedPhotos=_.filter(allPhotos, {tags: [{tag: urlTag}] })
//   return <ProfilePhotoList photos={taggedPhotos} {...props} />}}/>

export default connect()(ProfileContainer)
