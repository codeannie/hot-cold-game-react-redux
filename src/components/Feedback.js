import React from 'react';
import { connect } from 'react-redux';

export class Feedback extends React.Component {
  state = {
    feedback: '',
    gameWon: false
  }

  handleGuess(guess){
    if(this.state.gameWon === true) {
      return;
    }

    let target = this.props.targetNumber;
    console.log ('handle guess, target number ->', target);
  
    guess = parseInt(guess, 10);
    console.log ('handle guess, input ->', guess);

    if(isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a valid number'
      });
      return;
    }

    const guessDiff = Math.abs(target - guess);
    let feedback;

    if(guess === target) {
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
  };

  render () {
    return (
      <div className="feedbackContainer">
        <p className="feedback"> {this.state.feedback} </p>
      </div>   
    )
  }
}

const mapStateToProps = (state) => {
  return {
    targetNumber: state.targetNumber,
    guesses: state.guesses
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     newGame() {
//       const action = newGameAction();
//       dispatch(action);
//     }
//   }
// }

export default connect(mapStateToProps)(Feedback);