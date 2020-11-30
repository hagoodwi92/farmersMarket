import produceVisibleReducer from '../../reducers/produce-visible-reducer';

describe("produceVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(produceVisibleReducer(false, { type: null })).toEqual(false);
  });
  test('Should toggle produce visibility state to true', () => {
    expect(produceVisibleReducer(false, { type: 'TOGGLE_PRODUCE' })).toEqual(true);
  });
});