import React, { Component } from 'react';
import './App.css';
import NewPhotoForm from './components/NewPhotoForm'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import NewUserForm from './components/NewUserForm'
import LoginForm from './components/LoginForm'
import PhotoContainer from './components/PhotoContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path='/' render={(props) => <PhotoContainer {...props} />} />
        <Route path='/users/new' render={(props) => <NewUserForm {...props}/>}/>
        <Route path='/photos/new' render={(props) => <NewPhotoForm {...props}/> } />
        <Route exact path='/login' render={(props) => <LoginForm {...props}/>}/>
      </div>
    );
  }
}


export default App;

// export default connect(null, mapDispatchToProps)(App);
