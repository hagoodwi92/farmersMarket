export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PRODUCE':
      return !state;
    default:
      return state;
    }
  };