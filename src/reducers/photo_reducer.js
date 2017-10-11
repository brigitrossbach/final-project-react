function photoReducer(state={list: [], userPhotos: [], isFetching: false}, action){
  switch(action.type){
    case 'FETCHED_PHOTOS':
      return Object.assign({}, state, {list: action.payload})
    case 'FETCHING_PHOTOS':
      return Object.assign({}, state, { isFetching: true})
    case 'FETCHED_USER_PHOTOS':
      return Object.assign({}, state, {userPhotos: action.payload})
    default:
      return state
  }
}

export default photoReducer
