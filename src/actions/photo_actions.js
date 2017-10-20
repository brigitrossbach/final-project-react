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
    .then(photos => dispatch(photosFetchSuccess(photos)))
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
    .then(photos => dispatch(photosFetchSuccess(photos)))
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
    .then(photos => dispatch(photosFetchSuccess(photos)))
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
