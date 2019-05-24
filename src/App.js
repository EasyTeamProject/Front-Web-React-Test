import React, { Component } from 'react';
import './css/app.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="login">
          <img className="logo" src={require('./img/logo.png')} alt="MakeEvent logo"/>
          <Login/>
        </div>
        <div className="signUp">
          <SignUp/>
        </div>
      </div>
      
    );
  }
}

export default App;
