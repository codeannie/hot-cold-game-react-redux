import React from 'react';
import { connect } from 'react-redux';
import { guessNumberAction } from '../actions/actionCreator';
import Feedback from './Feedback';

export class GameForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuess = this.handleGuess.bind(this)

    // how would you have moved this to Feedback component as class? 
    this.state = {
    // userInput: props.guesses.length - 1, 
    feedback: '',
    gameWon: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const number = this.refs.guessInput.value;
    console.log('guess input from form ->', number);
    this.props.makeGuess(number);
    this.refs.gameForm.reset();

    this.handleGuess(number);
  }

  handleGuess(guess){
      console.log ('guess to the function?->', guess);
    if(guess >= 1 && guess <= 100) {
      
      let target = this.props.targetNumber;
      console.log ('handle guess(), target number ->', target);
      console.log ('handle guess(), input ->', guess);

      const guessDiff = Math.abs(target - guess);
      let feedback;
      
      if(parseInt(guess) === target) {
        this.setState({
          gameWon: true,
          feedback: 'Congrats, you guessed the number!'
        });
        return;

      } else if ( guessDiff  >= 50) {
        feedback = 'Brrr, it\'s so cold';
      } else if ( guessDiff  >= 30) {
        feedback = 'It\'s still cold';
      } else if ( guessDiff >= 20) {
        feedback = 'It\'s only a little cold';
      } else if ( guessDiff >= 15) {
        feedback = 'Woah, it got warm just now';
      } else if ( guessDiff >= 10) {
        feedback = 'It\'s getting warmer in here';
      } else if ( guessDiff  >= 5) {
        feedback = 'Ahh, getting closer to the sun!';
      } else if ( guessDiff  >= 1) {
        feedback = 'Get the ice cubes! It\'s hot in here';
      }

      this.setState({ feedback });
      console.log('check state->', this.state)
      }

    if(this.state.gameWon === true) {
      return;
    }

    if(isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a valid number'
      });
      return;
    }
  };


  render() {
    return (
      <div className="formContainer">
        <Feedback currentFeedback = {this.state.feedback} />
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
