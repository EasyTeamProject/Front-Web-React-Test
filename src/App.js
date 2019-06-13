import React, { Component } from 'react';
import './css/app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return(
    <Router>
        <Route path = "/login" component = {Login}/>
        <Route path = "/sign-up" component = {SignUp}/>
    </Router>
    )
}
}

export default App;
