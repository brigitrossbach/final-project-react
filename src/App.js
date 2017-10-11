import React, { Component } from 'react';
import './App.css';
import NewPhotoForm from './components/NewPhotoForm'
import { Route } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'
import NavBar from './components/NavBar'
import NewUserForm from './components/NewUserForm'
import LoginForm from './components/LoginForm'
import AllPhotoContainer from './components/AllPhotoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path='/' component={AllPhotoContainer} />
        <Route path='/users/new' render={(props) => <NewUserForm {...props}/>}/>
        <Route path='/photos/new' render={(props) => <NewPhotoForm {...props}/> } />
        <Route path='/me' render={(props) => <ProfileContainer {...props}/>} />
        <Route exact path='/login' render={(props) => <LoginForm {...props}/>}/>
      </div>
    );
  }
}


export default App;
