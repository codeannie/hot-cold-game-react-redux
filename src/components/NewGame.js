import React from 'react';

const NewGame = (props) => {
  return (
    <button className="newGame" onClick={props.resetGame}>New Game</button> 
  )
}

export default NewGame;