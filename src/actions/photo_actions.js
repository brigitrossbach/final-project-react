export function fetchUserPhotos(){
  return(dispatch) => {
    fetch('http://localhost:3000/users/1')
    .then(resp => resp.json())
    .then(json => dispatch(photosFetchSuccess(json)))
  }
}

export function photosFetchSuccess(photos){
  return {
    type: 'FETCH_SUCCESS',
    payload: photos
  }
}
