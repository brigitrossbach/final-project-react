import _ from 'lodash'

function photoReducer(state={list: [], userPhotos: [], currentPhoto: {}, searchResults: [], isFetching: false}, action){
  switch(action.type){
    case 'FETCHED_PHOTOS':

      return Object.assign({}, state, {list:_.uniqBy([...state.list, ...action.payload], 'id'), isFetching: false})
    case 'FETCHING_PHOTOS':
      return Object.assign({}, state, { isFetching: true})
    case 'FETCHED_USER_PHOTOS':
      return Object.assign({}, state, {userPhotos: action.payload, isFetching:false})
    case 'FETCHED_CURRENT_PHOTO':
      return Object.assign({}, state, {currentPhoto: action.payload, isFetching:false})
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, {searchResults: action.payload})
    default:
      return state
  }
}

export default photoReducer
