function userReducer(state= { currentUser:null, homepagePhotos: [], userProfile:{} }, action){
  switch(action.type){
    case 'USER_FETCHED':
    let flatPhotos
      if (action.payload){
        flatPhotos = action.payload.homepage_photos
      } else {
        flatPhotos=[]
      }
      return Object.assign({}, state, {currentUser: action.payload, homepagePhotos: flatPhotos})
    case 'USER_PROFILE_FETCHED':
      return Object.assign({}, state, {userProfile: action.payload})
    default:
      return state
  }
}

export default userReducer
