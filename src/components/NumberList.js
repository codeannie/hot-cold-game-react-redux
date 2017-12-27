import React from 'react';
import { connect } from 'react-redux';

const NumberList = (props) => {
  return (
    <div className="numberContainer">
      <ul className="numberList">
        {props.guesses.map((guess, index) => (
          <li className="guess" key={index}> {guess} </li>
        ))}
      </ul>
    </div>   
  )
}

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses
  }
};

export default connect(mapStateToProps)(NumberList);