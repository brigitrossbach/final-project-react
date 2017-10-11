export function fetchingPhotos(){
  return {
    type: "FETCHING_PHOTOS"
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
    fetch('http://localhost:3000/photos')
    .then(resp => resp.json())
    .then(json => {
      dispatch(photosFetchSuccess(json))
    })
  }
}
