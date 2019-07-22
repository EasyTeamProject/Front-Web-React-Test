import React, { Component } from 'react';
import './css/app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import EventCreationTunnel from './pages/EventCreationTunnel';
import firebase from 'firebase';
import firebaseConfig from './config/firebaseConfig';
import ProfilePage from './pages/ProfilePage';

class App extends Component {
  render() {
    firebase.initializeApp(firebaseConfig);
    return(
      <div>
        <Router>
          <Route path = "/createEvent" component = {EventCreationTunnel}/>
          <Route exact path = "/" component = {Login}/>
          <Route path = "/homepage" component = {HomePage}/>
          <Route path = "/profile" component = {ProfilePage}/>
        </Router>
        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js"></script>

        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#config-web-app --> */}

      </div>
      
      
    )
  }
}

export default App;
