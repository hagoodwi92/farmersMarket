import marketVisibleReducer from './market-visible-reducer';
import produceVisibleReducer from './produce-visible-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  marketVisibleOnPage: marketVisibleReducer,
  produceVisibleOnPage: produceVisibleReducer
});

export default rootReducer;