import React, { Component } from 'react';
import './css/app.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

class LoginPage extends Component {
  render() {
    return (
      <div className="app">
        <div id="loginApps">
          <div className="login">
            <img className="logo" src={require('./img/logo.png')} alt="MakeEvent logo"/>
            <Login/>
          </div>
          <div className="signUp">
            <SignUp/>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;