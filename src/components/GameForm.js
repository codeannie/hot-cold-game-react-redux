import React from 'react';
import { connect } from 'react-redux';
import { guessNumberAction } from '../actions/actionCreator';

export class GameForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // parse the integer before it goes into the Redux store 
  handleSubmit(e) {
    e.preventDefault();
    const number = parseInt(this.refs.guessInput.value, 10);
    console.log('guess input from form ->', number);
    // add to redux store 
    this.props.makeGuess(number);
    // array is not updating immediately - async task;
    // console.log('check array ->', this.props.guesses);
    this.refs.gameForm.reset();
  }

  render() {
    return (
      <div className="formContainer">
        <form ref="gameForm" className="gameForm" onSubmit={this.handleSubmit}> 
          <input type="text" ref="guessInput" placeholder="enter a number" />
          <button type="submit"> Submit </button>
        </form>
      </div>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
