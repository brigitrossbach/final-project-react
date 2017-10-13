function userReducer(state= { currentUser:null, homepagePhotos: []}, action){
  switch(action.type){
    case 'USER_FETCHED':
    let flatPhotos
      if (action.payload.homepage_photos){
        flatPhotos = action.payload.homepage_photos.reduce((a,b) => a.concat(b))
      } else {
        flatPhotos=[]
      }
      return Object.assign({}, state, {currentUser: action.payload.user, homepagePhotos: flatPhotos})
    default:
      return state
  }
}

export default userReducer
