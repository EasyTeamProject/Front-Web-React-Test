import React, { Component } from 'react';
import './css/app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  render() {
    return(
      <Router>
          <Route path = "/login" component = {Login}/>
          <Route path = "/homepage" component = {HomePage}/>
      </Router>
    )
}
}

export default App;
