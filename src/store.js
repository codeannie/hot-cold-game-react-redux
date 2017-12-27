import { createStore } from 'redux';
import rootReducer from './reducers/gameReducers';

let store = createStore(rootReducer);

export default store;