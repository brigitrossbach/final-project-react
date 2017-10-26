export function fetchingPhotos(){
  return {
    type: "FETCHING_PHOTOS"
  }
}


export function userPhotosFetchSuccess(photos){
  return {
    type: 'FETCHED_USER_PHOTOS',
    payload: photos
  }
}

export function photosFetchSuccess(photos){
  return {
    type: 'FETCHED_PHOTOS',
    payload: photos
  }
}

export function fetchUserPhotos(){
  return function(dispatch){
    dispatch(fetchingPhotos())
    fetch(`http://localhost:3000/users`, {
      headers: {
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch(userPhotosFetchSuccess(json.photos))
    })
  }
}

export function fetchAllPhotos(counter){
  return function(dispatch){
    dispatch(fetchingPhotos())
    fetch(`http://localhost:3000/photos/?page=${counter}`)
    .then(resp => resp.json())
    .then(json => {
      dispatch(photosFetchSuccess(json))
    })
  }
}

export function photoFetched(photo){
  return {
    type: 'FETCHED_CURRENT_PHOTO',
    payload: photo
  }
}

export function fetchCurrentPhoto(photoId){
  return function(dispatch){
    dispatch(fetchingPhotos())
    fetch(`http://localhost:3000/photos/${photoId}`)
    .then(resp => resp.json())
    .then(json => dispatch(photoFetched(json)))
  }
}


export function likePhoto(photo){
  return function(dispatch){
    let body = JSON.stringify({photo_id: photo.id})
    fetch('http://localhost:3000/likes', {
      method: 'post',
      headers: {
        'Authorization': localStorage.getItem('jwt'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: body
    })
    .then(resp => resp.json())
    .then(photo => dispatch(photoFetched(photo)))
  }
}

export function unlikePhoto(like){
  return function(dispatch){
    fetch(`http://localhost:3000/likes/${like.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(photos => dispatch(photoFetched(photos)))
  }
}

export function addComment(body){
  return function(dispatch){
    fetch('http://localhost:3000/comments', {
      method: 'post',
      headers: {
        'Authorization':localStorage.getItem('jwt'),
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(resp => resp.json())
    .then(photo => dispatch(photoFetched(photo)))
  }
}

export function addPhotoToBoard(body){
  return function(dispatch){
    fetch('http://localhost:3000/addToBoard', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(resp => resp.json())
    .then(board => console.log(board))
  }
}

export function deleteComment(comment) {
  return function(dispatch){
    fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: 'delete'
    })
    .then(resp => resp.json())
    .then(photo => dispatch(photoFetched(photo)))
  }
}

export function photosSearched(photos){
  return {
    type: 'SEARCH_RESULTS',
    payload: photos
  }
}

export function searchPhotos(searchTerm){
  return function(dispatch){
    fetch(`http://localhost:3000/search/?term=${searchTerm}`)
    .then(resp => resp.json())
    .then(photos => dispatch(photosSearched(photos)))
  }
}

export function deletePhoto(photo){
  return function(dispatch){
    fetch(`http://localhost:3000/photos/${photo.id}`, {
      method: 'delete'
    })
    .then(resp => resp.json())
    .then(photos => dispatch(userPhotosFetchSuccess(photos)))
  }
}

export function fetchingPhoto(){
  return{
    type: 'FETCHING_PHOTO'
  }
}

export function addPhoto(data, props) {
  return function(dispatch){
    dispatch(fetchingPhoto())
    fetch('http://localhost:3000/photos', {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch(photoFetched(json))
      props.history.push(`/photo/${json.id}`)
    })
  }
}
