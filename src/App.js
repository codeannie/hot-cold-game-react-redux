import React, { Component } from 'react';
import GameForm from './components/GameForm';
import GuessList from './components/NumberList';
import Feedback from './components/Feedback';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hot & Cold Game</h1>
        </header>
        <p className="App-intro">
          Guess the number between 1 and 100!
        </p>
        <Feedback />
        <GameForm />
        <GuessList />
      </div>
    );
  }
}

export default App;
