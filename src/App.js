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
import BoardContainer from './components/BoardContainer'
import ChatApp from './components/ChatApp'

class App extends Component {

  render() {

    const AuthPhotoContainer = Authorize(PhotoContainer)
    const AuthNewPhotoForm = Authorize(NewPhotoForm)
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/chat' component={ChatApp} />
        <Route path='/upload' render={(props) => <AuthNewPhotoForm {...props} /> } />
        <Route path='/' render={(props) => <AuthPhotoContainer {...props} />} />
        <Route exact path='/users/new' render={(props) => <NewUserForm {...props}/>}/>
        <Route path='/boards' render={(props) => <BoardContainer {...props}/>}/>
        <Route exact path='/login' render={(props) => <LoginForm {...props}/>}/>
      </div>
    );
  }
}


export default App;

// export default connect(null, mapDispatchToProps)(App);
