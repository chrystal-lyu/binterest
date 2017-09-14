import {combineReducers} from 'redux';

export const pinsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PINS':
      return state = action.pins;
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  pins: pinsReducer
});

export default rootReducer;