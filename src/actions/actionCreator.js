
// action types
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const NEW_GAME = 'NEW GAME';

// action creator
export const guessNumberAction = (number) => {
  return {
    type: GUESS_NUMBER,
    payload: {
      number
    }
  }
}

export const newGameAction = () => {
  return {
    type: NEW_GAME
  }
}