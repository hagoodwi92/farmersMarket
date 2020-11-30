import marketVisibleReducer from '../../reducers/market-visible-reducer';

describe("marketVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(marketVisibleReducer(false, { type: null })).toEqual(false);
  });
  test('Should toggle market visibility state to true', () => {
    expect(marketVisibleReducer(false, { type: 'TOGGLE_MARKET' })).toEqual(true);
  });
});