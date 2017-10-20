import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPhotos, fetchUserPhotos } from '../actions/photo_actions'
import { Route } from 'react-router-dom'
import ProfilePhotoList from './ProfilePhotoList'
import PhotoDetail from './PhotoDetail'
import _ from 'lodash'
import UserProfile from './UserProfile'
import { fetchCurrentUser } from '../actions/user_actions'
import Waypoint from 'react-waypoint'

class PhotoContainer extends React.Component {

  state={
    allCounter: 1,
    userCounter: 1
  }
  componentDidMount(){
    this.props.fetchUserPhotos()
    this.props.fetchPhotos(this.state.allCounter)
    this.props.fetchCurrentUser()
    let newState= this.state.allCounter +=1
    this.setState({allCounter: newState})
  }

  shuffle(array){
    let currentIndex= array.length, temporaryValue, randomIndex;
    //while there are still elements left to shuffle
    while (0 !== currentIndex){
      //pick a remaining element
      randomIndex=Math.floor(Math.random()*currentIndex);
      currentIndex -=1
      //swap it with the current element
      temporaryValue=array[currentIndex]
      array[currentIndex]=array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  loadMoreContent = () => {
    let counter=this.state.allCounter
    console.log(this.props.location)
    if (this.props.location.pathname === '/explore'){
      this.props.fetchPhotos(counter)
      let newState= counter +=1
      this.setState({allCounter: newState})
    }
  }


  render(){
    if (this.props.allPhotos && this.props.userPhotos){
      return(
        <div>
        <Waypoint onLeave={this.loadMoreContent} />
          <Route exact path = '/explore' render={(props) => {
            let publicPhotos=this.props.allPhotos.filter(photo => photo.public === true)
            this.shuffle(publicPhotos)
            return <ProfilePhotoList photos={publicPhotos} {...props} />
          }}/>
          <Route exact path='/me' render={(props) => <ProfilePhotoList photos={this.props.userPhotos.reverse()} {...props} />}/>
          <Route exact path='/photos/:tag' render={(props) => {
            let urlTag=props.match.params.tag
            let allPhotos=this.props.allPhotos
            let taggedPhotos=_.filter(allPhotos, {tags: [{tag: urlTag}] })
            return <ProfilePhotoList photos={taggedPhotos.reverse()} {...props} />}}/>
          <Route exact path='/photo/:id' render={(props) => {
            let photoId=parseInt(props.match.params.id, 10)
            return <PhotoDetail {...props} photoId={photoId} />
          }}/>
          <Route exact path='/' render={(props) => {
            let passedPhotos = this.props.homepagePhotos
            return <ProfilePhotoList photos={passedPhotos} />
          }} />
          <Route exact path='/user/:username' render={(props) => {
            let username=props.match.params.username
            return <UserProfile {...props} currentUser={this.props.currentUser} username={username} />
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
    fetchPhotos: (counter) => {
      dispatch(fetchAllPhotos(counter))
    },
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);
