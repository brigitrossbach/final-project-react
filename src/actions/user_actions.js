export function userFetched(user){
  return {
    type: 'USER_FETCHED',
    payload: user
  }
}

export function fetchCurrentUser(){
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

export function userProfileFetched(user){
  return {
    type: "USER_PROFILE_FETCHED",
    payload: user
  }
}

export function fetchUserProfile(username){
  return function(dispatch){
    fetch(`http://localhost:3000/getuser/?username=${username}`)
    .then(resp => resp.json())
    .then(user => dispatch(userProfileFetched(user)))
  }
}

export function userFollowed(user){
  return {
    type: "USER_FOLLOWED",
    payload: user
  }
}

export function followUser(user){
  return function(dispatch){
    let newBody=JSON.stringify({followed_user: user})
    fetch('http://localhost:3000/follow', {
      method: 'post',
      headers: {
        'Authorization': localStorage.getItem('jwt'),
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: newBody
    })
    .then(resp => resp.json())
    .then(json => dispatch(userProfileFetched(json)))
  }
}

export function unfollowUser(user){
  return function(dispatch){
    let newBody=JSON.stringify({user_to_unfollow: user})
    fetch('http://localhost:3000/unfollow',{
      method: 'post',
      headers: {
        'Authorization': localStorage.getItem('jwt'),
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: newBody
    })
    .then(resp => resp.json())
    .then(json => dispatch(userProfileFetched(json)))
  }
}
