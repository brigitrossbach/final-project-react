import React from 'react'

class NewUserForm extends React.Component {
  state={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:''
  }

  handlePasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }

  handleFirstNameChange = (event) =>{
    this.setState({firstName: event.target.value})
  }

  handleUsernameChange = (event) =>{
    this.setState({username: event.target.value})
  }

  handleLastNameChange = (event) =>{
    this.setState({lastName: event.target.value})
  }

  handleEmailChange = (event) =>{
    this.setState({email: event.target.value})
  }


  handleSubmit=(event)=>{
    event.preventDefault()
    let newBody = JSON.stringify({username: this.state.username, password:this.state.password, email: this.state.email, first_name: this.state.firstName, last_name: this.state.lastName})
    fetch('http://localhost:3000/users', {
      method:"POST",
      headers:{
        "Accept":'application/json',
        "Content-Type": "application/json"
      },
      body: newBody
    })
    .then(resp => resp.json())
    .then(user => {
      localStorage.setItem('jwt', user.jwt)
      this.setState({
        username: '',
        password:'',
        firstName:'',
        lastName:'',
        email:''
      })
    })
    .then(() => this.props.history.push('/'))
  }

  render(){
  return(
    <form className='ui form' onSubmit={this.handleSubmit}>
      <div className='field'>
        <label>Username:</label>
        <input type='text' placeholder='Username' onChange={this.handleUsernameChange} value={this.state.username}/>
      </div>
      <div className='field'>
        <label>Password:</label>
        <input type='password' placeholder='Password' onChange={this.handlePasswordChange} value={this.state.password}/>
      </div>
      <div className='field'>
        <label>First Name:</label>
        <input type='text' placeholder='First Name' onChange={this.handleFirstNameChange} value={this.state.firstName} />
      </div>
      <div className='field'>
        <label>Last Name:</label>
        <input type='text' placeholder='Last Name' onChange={this.handleLastNameChange} value={this.state.lastName}/>
      </div>
      <div className='field'>
        <label>Email:</label>
        <input type='text' placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}/>
      </div>
      <button className='ui button' type='submit'>Submit</button>
    </form>
  )
}
}

export default NewUserForm
