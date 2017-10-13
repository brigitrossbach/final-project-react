function userReducer(state= { currentUser:null, homepagePhotos: []}, action){
  switch(action.type){
    case 'USER_FETCHED':
    let flatPhotos
      if (action.payload.homepage_photos.length > 0){
        flatPhotos = action.payload.homepage_photos
      } else {
        flatPhotos=[]
      }
      return Object.assign({}, state, {currentUser: action.payload, homepagePhotos: flatPhotos})
    default:
      return state
  }
}

export default userReducer
