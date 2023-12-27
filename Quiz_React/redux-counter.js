import { createStore } from "redux";

const counterReducer = (state = { count: 0 }, action) => {
  action.payload = action.payload || 1;

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload || 1 };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload || 1};
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const handleStateChange = () => {
  console.log("The current state is: ", store.getState());
};

store.subscribe(handleStateChange);

console.log("Initial state: ", store.getState());

store.dispatch({ type: "INCREMENT" });
console.log("After INCREMENT: ", store.getState());

store.dispatch({ type: "INCREMENT", payload: 2 });
console.log("After INCREMENT (payload: 2): ", store.getState());

store.dispatch({ type: "DECREMENT", payload: 3 });
console.log("After DECREMENT (payload: 3): ", store.getState());

store.dispatch({ type: "INCREMENT", payload: 2 });
console.log("After INCREMENT (payload: 2): ", store.getState());

console.log("Final state: ", store.getState());
