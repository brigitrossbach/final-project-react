import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../actions/user_actions'

class EditProfile extends React.Component {

  state={
    user_id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentUser){
      this.setState({
        user_id: nextProps.currentUser.id,
        username:nextProps.currentUser.username,
        first_name:nextProps.currentUser.first_name,
        last_name:nextProps.currentUser.last_name,
        email:nextProps.currentUser.email
      })
    }
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
    this.props.updateUser(this.state)
  }

  render(){
      return(
        <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label>Username:</label>
            <input type='text' placeholder='Username' onChange={this.handleUsernameChange} value={this.state.username}/>
          </div>
          <div className='field'>
            <label>First Name:</label>
            <input type='text' placeholder='First Name' onChange={this.handleFirstNameChange} value={this.state.first_name} />
          </div>
          <div className='field'>
            <label>Last Name:</label>
            <input type='text' placeholder='Last Name' onChange={this.handleLastNameChange} value={this.state.last_name}/>
          </div>
          <div className='field'>
            <label>Email:</label>
            <input type='text' placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}/>
          </div>
          <button className='ui button' type='submit'>Submit</button>
        </form>
      </div>
      )
    }
}


function mapDispatchToProps(dispatch){
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.users.currentUser
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
