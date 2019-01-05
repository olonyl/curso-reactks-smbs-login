import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyChSGpKwG4kejslh9MZ3-eFGoVzCFnlUZI",
      authDomain: "mcurso-a6b81.firebaseapp.com",
      databaseURL: "https://mcurso-a6b81.firebaseio.com",
      projectId: "mcurso-a6b81",
      storageBucket: "mcurso-a6b81.appspot.com",
      messagingSenderId: "1037002527642"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
