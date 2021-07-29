import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

const store = createStore(
  // le reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;