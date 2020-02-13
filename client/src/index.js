import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

//REDUX
import { createStore, applyMiddleware, compose } from 'redux'
//REACT-REDUX CONNECT
import { Provider } from 'react-redux'
//REUDX-THUNK
import thunk from 'redux-thunk'
//IMPORT REDUCER
import rootReducer from './redux/reducers/rootReducer'
//CREATE STORE WITH COMBINE REDUCER

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

//ADD STORE INSIDE PROVIDER TO SHARE STATE TO APP
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));