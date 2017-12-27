import React from 'react';
import { connect } from 'react-redux';
import { guessNumberAction, newGameAction } from '../actions/actionCreator';

export class GameForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const number = this.refs.guessInput.value;
    console.log('guess input ->', number);
    this.props.makeGuess(number);
    this.refs.gameForm.reset();
  }

  render() {
    return (
      <form ref="gameForm" className="gameForm" onSubmit={this.handleSubmit}> 
        <input type="text" ref="guessInput" placeholder="enter a number" />
        <button type="submit"> Submit </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    targetNumber: state.targetNumber,
    guesses: state.guesses
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeGuess(number) {
      const action = guessNumberAction(number);
      dispatch(action);
    },
    newGame() {
      const action = newGameAction();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
