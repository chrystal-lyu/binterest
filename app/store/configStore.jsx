import * as redux from 'redux';

import rootReducer from 'reducers';
const data = require('json-loader!./../data/pins.json');

export const defaultState = data;

const store = redux.createStore(rootReducer, defaultState, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;