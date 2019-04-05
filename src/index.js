import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root'
import './index.css';

import Firebase, { FirebaseContext } from './components/Firebase';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Root store={store} />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
