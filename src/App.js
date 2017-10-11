import React, { Component } from 'react';
import './App.css';
import NewPhotoForm from './components/NewPhotoForm'
import { Route } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Route path='/photos/new' render={(props) => <NewPhotoForm {...props}/> } />
      <Route path='/me' render={(props) => <ProfileContainer {...props}/>} />
      </div>
    );
  }
}

export default App;
