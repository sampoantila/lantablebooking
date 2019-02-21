import React from 'react';
import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// const store = createStore(rootReducer)


ReactDOM.render(
    // <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    // </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
