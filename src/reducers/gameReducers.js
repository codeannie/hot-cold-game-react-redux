import { GUESS_NUMBER, NEW_GAME } from '../actions/actionCreator';

// set target number
const targetNum = () => { 
  return Math.floor((Math.random() * 100) + 1)
}; 

// initial state 
const initialState = {
  targetNumber: targetNum(),
  guesses: []
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_NUMBER:
    console.log('update state with new guess->', action.payload.number)
    console.log('answer ->', state.targetNumber);

      return {
        ...state,
        guesses: [...state.guesses, action.payload.number]
      };

    case NEW_GAME:
    console.log('start new game!');
    //not sure if it works this way or needs to be initial state
      return state; 

    default: 
      return state;
  }
};

export default gameReducer;