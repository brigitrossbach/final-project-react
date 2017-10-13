import React, { Component } from 'react';
import './App.css';
import NewPhotoForm from './components/NewPhotoForm'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import NewUserForm from './components/NewUserForm'
import LoginForm from './components/LoginForm'
import PhotoContainer from './components/PhotoContainer'
import Search from './components/Search'
import Authorize from './components/Authorize'

class App extends Component {

  render() {

    const AuthPhotoContainer = Authorize(PhotoContainer)
    const AuthNewPhotoForm = Authorize(NewPhotoForm)
    return (
      <div className="App">
        <NavBar />
        <Route path='/' render={(props) => <AuthPhotoContainer {...props} />} />
        <Route path='/users/new' render={(props) => <NewUserForm {...props}/>}/>
        <Route path='/photos/new' render={(props) => <AuthNewPhotoForm {...props}/> } />
        <Route exact path='/login' render={(props) => <LoginForm {...props}/>}/>
      </div>
    );
  }
}


export default App;

// export default connect(null, mapDispatchToProps)(App);
