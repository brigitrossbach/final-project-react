function PhotoReducer(state={list: []}, action){
  switch(action.type){
    case 'FETCH_SUCCESS':
      return Object.assign({}, state, {list: action.payload})
    default:
      return state
  }
}

export default PhotoReducer
