function userReducer(state= { currentUser:null }, action){
  switch(action.type){
    case 'USER_FETCHED':
      return Object.assign({}, state, {currentUser: action.payload})
    default:
      return state
  }
}

export default userReducer
