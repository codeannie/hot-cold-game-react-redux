import React from 'react';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      feedback: '',
      gameWon: false
    }
  }
    // this looks for a change within that render every time
    componentDidUpdate(nextProps) {
    if(this.props.guesses.length !== nextProps.guesses.length) {
      this.handleGuess();
    }
  }

  handleGuess(){
    let guess = this.props.guesses[this.props.guesses.length-1];
      if(isNaN(guess)) {
        this.setState({
          feedback: 'Please enter a valid number'
        });
        return;
      }

    if(guess >= 1 && guess <= 100) {
      let target = this.props.targetNumber;
      console.log ('handle guess(), target number ->', target);
      console.log ('handle guess(), input ->', guess);

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
      console.log('check state->', this.state)
      }

    if(this.state.gameWon === true) {
      return;
    }
};

  render() {
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
};

export default connect(mapStateToProps, null)(Feedback);

// need to fix new game button to reset feedback and game won to false? 