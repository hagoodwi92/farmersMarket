import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import marketVisibleReducer from '../../reducers/market-visible-reducer';
import produceVisibleReducer from '../../reducers/produce-visible-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      marketVisibleOnPage: false,
      produceVisibleOnPage: false
    });
  });

  test('Check that initial state of marketVisibleReducer matches root reducer', () => {
    expect(store.getState().marketVisibleOnPage).toEqual(marketVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of produceVisibleReducer matches root reducer', () => {
    expect(store.getState().produceVisibleOnPage).toEqual(produceVisibleReducer(undefined, { type: null }));
  });

  test('Check that TOGGLE_MARKET action works for marketVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_MARKET'
    }
    store.dispatch(action);
    expect(store.getState().marketVisibleOnPage).toEqual(marketVisibleReducer(undefined, action));
  });

  test('Check that TOGGLE_PRODUCE action works for produceVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_PRODUCE'
    }
    store.dispatch(action);
    expect(store.getState().produceVisibleOnPage).toEqual(produceVisibleReducer(undefined, action));
  });
});