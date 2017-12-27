import React, { Component } from 'react';
import GameForm from './components/GameForm';
import GuessList from './components/NumberList';
import NewGameButton from './components/NewGame';
import Feedback from './components/Feedback';

import { connect } from 'react-redux';
import { newGameAction } from './actions/actionCreator';


import logo from './logo.svg';
import './App.css';

export class App extends Component {
  // should this be moved to game form?
  // it works but how to reset local state for feedback on gameform?
  newGame() {
    console.log('new game button CLICKed');
    this.props.newGame();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hot & Cold Game</h1>
        </header>
        <main>
          <NewGameButton resetGame={this.props.newGame}/>
          <p className="App-intro">
            Guess the number between 1 and 100!
          </p>
          <Feedback />
          <GameForm />
          <GuessList />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame() {
      const action = newGameAction();
      dispatch(action);
    }
  }
}

// null needed to match since GameForm also has both params
export default connect(null, mapDispatchToProps)(App);