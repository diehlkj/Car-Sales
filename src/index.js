import React from 'react';
// To create the redux store we first need to import 'createStore' from redux. Don't forget to npm/yarn add react-redux in addition to redux before beginning the application.
import { createStore } from 'redux';

// 'Provider' is a component from react-redux that is only for react. This is what will provide components access to our application level state (store).
import { Provider } from "react-redux";

// Bring in the reducer function and call it 'reducer' from the ./reducers folder.
import { featureReducer as reducer } from './reducers';

import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


// Now we create a variable called 'store' (can be any name) and set it to the 'createStore()' method we imported from redux. We're going to be using 'reducer' which is just 'featureReducer' renamed.
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
