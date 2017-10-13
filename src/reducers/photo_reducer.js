function photoReducer(state={list: [], userPhotos: [], isFetching: false}, action){
  switch(action.type){
    case 'FETCHED_PHOTOS':
      return Object.assign({}, state, {list: action.payload, isFetching: false})
    case 'FETCHING_PHOTOS':
      return Object.assign({}, state, { isFetching: true})
    case 'FETCHED_USER_PHOTOS':
      return Object.assign({}, state, {userPhotos: action.payload, isFetching:false})
    default:
      return state
  }
}

export default photoReducer
