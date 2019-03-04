import React from 'react';
import { render } from 'react-dom'
// import { createStore } from 'redux'
//form test**
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
//form**
import { Provider } from 'react-redux'
import './css/index.css';
import App from './App';
// import reducer from './components/reducers/reducer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
  })
  
  const store = createStore(rootReducer)



// const store = createStore(reducer);

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
