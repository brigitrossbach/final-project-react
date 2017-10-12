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
    fetch('http://localhost:3000/users', {
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

export function fetchAllPhotos(){
  return function(dispatch){
    dispatch(fetchingPhotos())
    fetch('http://localhost:3000/photos')
    .then(resp => resp.json())
    .then(json => {
      dispatch(photosFetchSuccess(json))
    })
  }
}
