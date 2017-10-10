import React, { Component } from 'react';
import './App.css';
import NewPhotoForm from './components/NewPhotoForm'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/photos/new' component={NewPhotoForm} />
      </div>
    );
  }
}

export default App;
