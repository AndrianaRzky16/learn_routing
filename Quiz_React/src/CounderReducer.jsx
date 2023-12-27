const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return action.payload;
    case 'random':
      return action.payload;
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export default counterReducer;
