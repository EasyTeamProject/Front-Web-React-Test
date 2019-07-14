import React, { Component } from 'react';
import './css/app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import EventCreationTunnel from './pages/EventCreationTunnel'

class App extends Component {

  render() {
    return(
      <Router>
          <Route path = "/createEvent" component = {EventCreationTunnel}/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/homepage" component = {HomePage}/>
      </Router>
    )
}
}

export default App;
