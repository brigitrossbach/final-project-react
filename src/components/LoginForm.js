import React from 'react'


class LoginForm extends React.Component{
  state={
    username: '',
    password:'',
    currentError: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newBody=JSON.stringify({username: this.state.username, password: this.state.password})
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: newBody
    })
    .then(resp => resp.json())
    .then(userJSON => {
    if (userJSON.user) {
      localStorage.setItem("jwt", userJSON.jwt)
      this.setState({
        username: '',
        password: ''
      })
    } else {
      this.setState({
        currentError: 'User not found'
      })
    }
  })
  .then(() => {
    if (localStorage.getItem('jwt')) {
      this.props.history.push('/')
    }
  })

}

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render(){
    return(
      <form className='form' onSubmit={this.handleSubmit} >
        <input type='text' value={this.state.username} placeholder='Username' onChange={this.handleUsernameChange} />
        <input type='password' value={this.state.password} placeholder='Password' onChange={this.handlePasswordChange} />
        <button type='submit' value='submit'>Log In</button>
      </form>
    )
  }

}

export default LoginForm
