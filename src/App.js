import React, { Component } from 'react';
import './css/App.css';
import MainPage from './components/MainPage';
import { Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/admin" component={AdminPage} />
        <Route exact path="/" component={MainPage} />
      </div>
    );
  }
}

export default App;
