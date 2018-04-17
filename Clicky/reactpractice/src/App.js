import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Score">
          <h1>Clicky on an image to begin!</h1>
        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Game!</h1>
        </header>
        <p className="App-intro">
         Click on an image to earn points, but don't click on any more than once!
        </p>
      </div>
    );
  }
}

export default App;
