export function userFetched(user){
  return {
    type: 'USER_FETCHED',
    payload: user
  }
}

export function addBoard(body){
  return function(dispatch){
    fetch('http://localhost:3000/boards',{
      method: 'post',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: body
    })
    .then(resp => resp.json())
    .then(user => dispatch(userFetched(user)))
  }
}
