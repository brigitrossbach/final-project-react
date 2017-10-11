import React, { Component } from 'react';
import './App.css';
import NewPhotoForm from './components/NewPhotoForm'
import { Route } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/photos/new' component={NewPhotoForm} />
      <Route path='/me' component={ProfileContainer} />
      </div>
    );
  }
}

export default App;
