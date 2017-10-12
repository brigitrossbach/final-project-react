import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import photoReducer from './reducers/photo_reducer'
import userReducer from './reducers/user_reducer'

const rootReducer = combineReducers({photos: photoReducer, users: userReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();



//in actions- want to export a function that returns a function that takes dispatch
//then fetches the books and dispatches the fetched books
