function photoReducer(state={list: [], isFetching: false}, action){
  switch(action.type){
    case 'FETCHED_PHOTOS':
      return Object.assign({}, state, {list: action.payload})
    case 'FETCHING_PHOTOS':
      return Object.assign({}, state, { isFetching: true})
    default:
      return state
  }
}

export default photoReducer
