export function userFetched(user){
  return {
    type: 'USER_FETCHED',
    payload: user
  }
}

export function fetchCurrentUser(){
  debugger
  return function(dispatch){
    fetch('http://localhost:3000/users',{
      headers:{
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(resp => resp.json())
    .then(user => dispatch(userFetched(user)))
  }
}
