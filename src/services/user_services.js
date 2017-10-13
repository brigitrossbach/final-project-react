export function fetchUser(user_id){
  return fetch(`http://localhost:3000/users/${user_id}`)
  .then(resp => resp.json())
}
